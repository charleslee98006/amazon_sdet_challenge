import { test as base, expect} from '@playwright/test';
import { LandingPage } from '../page-objects/amazon-landing-page';
import { LoginPage } from '../page-objects/amazon-login-page';

  //fixture to prepare the test before executing test case.
  const test = base.extend<{ landingPage: LandingPage, loginPage: LoginPage}>({
    landingPage: async ({page}, use) => {
    const landingPage = new LandingPage(page);
    await page.goto(process.env.BASE_URL || '');
    await page.reload(); //ajax error sometimes appear which will obfuscate the sign in button; refresh fixes this issue.
    await use(landingPage);
    },
    loginPage:async({page}, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
  });

  const postiveTestCasesArray = [
    {testCase: 1, userNameEmail: process.env.USERNAME_EMAIL, accountpassword: process.env.USERNAME_PWD, description: "When a user use an valid email address and password to login, the user should be landing on their own landing page"},
    {testCase: 2, userNameEmail: process.env.USERNAME_PHONE_NO, accountpassword: process.env.USERNAME_PWD, description: "When a user use an valid mobile phone number and password to login, the user should be landing on their own landing page"},
    // {testCase: 2, description: "When a user use an valid phone address and password to login, the user should be landing on their own landing page"}, //Will need a test phone number from a 3rd party or set it up ourselves.
  ];

  test.describe('Amazon User Login Tests - Happy Path', () => {
    for (const data of postiveTestCasesArray) {
      test(`[${data.testCase}] ${data.description}`, async ({page, landingPage, loginPage}) => {
        await landingPage.signInButton.click();
        await loginPage.signInWithEmailAndPassword(data.userNameEmail, data.accountpassword);
        await expect(landingPage.userNameText).toContainText('Hello, tester');
        await page.waitForURL('**\/www.amazon.com/?ref_=nav_custrec_signin');
        await expect(page.url()).toContain('www.amazon.com/?ref_=nav_custrec_signin');
      });
    }
    test('[3] When the a user uses an invalid email at login, the user will see the error message', async ({page, landingPage, loginPage}) => {
      await landingPage.signInButton.click();
      await loginPage.emailPhoneNoField.click();
      await loginPage.emailPhoneNoField.fill('incorrectText');
      await loginPage.continueButton.click();
      await expect(loginPage.emailFieldErrorMessage).toContainText('Enter a valid email address or phone number');
      await expect(page.url()).toContain('https://www.amazon.com/ap/signin?');
    });
  // This test case has a security captcha; skipping this test but can be used in lower environments.
    test.skip('[4] When the a user uses an invalid password at login, the user will see the error message', async ({page, landingPage, loginPage}) => {
      await landingPage.signInButton.click();
      await loginPage.emailPhoneNoField.click();
      await loginPage.emailPhoneNoField.fill(process.env.USERNAME_EMAIL);
      await loginPage.continueButton.click();
      await loginPage.passwordField.fill('incorrectText');
      await loginPage.signInButton.click();
      await expect(loginPage.passwordFieldErrorMessage).toContainText('Your Password is incorrect');
      await expect(loginPage.errorBoxHeaderText).toBeVisible();
      await expect(loginPage.errorIcon).toBeVisible();
      await expect(page.url()).toContain('https://www.amazon.com/ap/signin?');
    });
  });

test.afterEach(async ({page}) => {
  await page.close();
});