import { test as base} from '@playwright/test';
import { LandingPage } from '../page-objects/amazon-landing-page';
import { LoginPage } from '../page-objects/amazon-login-page';

//fixture to prepare the test before executing test case.
const test = base.extend<{ landingPage: LandingPage, loginPage: LoginPage}>({
  landingPage: async ({page}, use) => {
   const landingPage = new LandingPage(page);
   await page.goto(process.env.BASE_URL || '');
   await use(landingPage);
  },
  loginPage:async({page}, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

const postiveTestCasesArray = [
  {testCase: 1, description: "When a user use an valid email address and password to login, the user should be landing on their own landing page"},
  // {testCase: 2, description: "When a user use an valid phone address and password to login, the user should be landing on their own landing page"}, //Will need a test phone number from a 3rd party or set it up ourselves.
];

test.describe('Amazon User Login Tests - Happy Path', () => {
  for (const data of postiveTestCasesArray) {
    test(`[${data.testCase}] ${data.description}`, async ({ page, landingPage, loginPage}) => {
      await landingPage.signInButton.click();
      await loginPage.signInWithEmailAndPassword(process.env.USERNAME_EMAIL, process.env.USERNAME_PWD);
  });
  }
});
