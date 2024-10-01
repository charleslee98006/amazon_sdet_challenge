import { type Locator, type Page } from '@playwright/test';

/**  
 * Amazon Landing Page Object class and its attributes
*/
export class LandingPage {
  readonly page: Page;
  readonly signInDropDown: Locator;
  readonly signInButton: Locator;
  readonly userNameText: Locator;

  /**
 * Constructor
 * @param {Page} page passing in the Playwright page object
 */
  constructor(page: Page) {
    this.signInButton = page.getByRole('link', { name: 'Sign in', exact: true });
  }
}