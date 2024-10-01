import { type Locator, type Page } from '@playwright/test';

/**  
 * Amazon Login Page Object class and its attributes
*/
export class LoginPage {
  readonly page: Page;
  readonly emailPhoneNoField: Locator;
  readonly continueButton: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly emailFieldErrorMessage: Locator;
  readonly passwordFieldErrorMessage: Locator;
  readonly errorBoxHeaderText: Locator;
  readonly errorIcon: Locator;

  /**
 * Constructor that sets the challenge page attributes
 * @param  {Page} page passing in the Playwright page object
 */
  constructor(page: Page) {
    this.emailPhoneNoField = page.getByLabel('Email or mobile phone number');
    this.continueButton = page.getByLabel('Continue');
    this.passwordField = page.getByLabel('Password');
    this.signInButton = page.locator('//*[@id="signInSubmit"]');
    this.emailFieldErrorMessage = page.getByText('Enter a valid email address');
    this.passwordFieldErrorMessage = page.getByText('Your password is incorrect');
    this.errorBoxHeaderText = page.getByRole('heading', { name: 'There was a problem' });
    this.errorIcon = page.locator('#auth-error-message-box i');
  }

  /**
   * A function that signs in the account using the username and password
   * @param  {string} emailAddress the email address the account is under
   * @param  {string} password the account password
   */
  async signInWithEmailAndPassword(emailAddress: string = '', password: string = ''){
    await this.emailPhoneNoField.click();
    await this.emailPhoneNoField.fill(emailAddress);
    await this.continueButton.click();
    await this.passwordField.click();
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}