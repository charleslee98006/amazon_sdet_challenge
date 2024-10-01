# AMAZON SDET Challenge
This is a coding sample of the Amazon user login using playwright.

## Getting started
1. Please setup your git config and clone the repository onto your local machine (IDE, preferred VSCode)
2. Make sure that you have the follow versions:
    - Npm package manager is version 10.7.0 or above. If not installed, please do so. You can do ```npm -v``` in terminal to check.
    - Node version is 20.15.0 or greater. You can do ```node -v``` in terminal to check.
3. Do a ```npm install``` in the terminal and you should be ready to do step 4
    - Note that if you are prompted to with an error from playwright,  you can always following the [Installing Playwright](https://playwright.dev/docs/intro#installing-playwright) guide.
4. try ```npm run test``` and you should see tests running.
    - To run each individual tests,  you can just go the the code-challenge-test.spec.ts file and comment out a lines or install the playwright test in vscode plugin to run each individual in the testing section from the testing flask icon.

## Key Assumptions
Below are some key assumptions made from the challenge when making the best algorithm:
- Due to the long Amazon account creation and deletion process, the tests are created with the assumption that a valid account exists.
- Amazon valid accounts will require valid phone numbers for One Time Password