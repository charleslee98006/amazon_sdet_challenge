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

## Playwright Test Run Execution flow
Below is the image of the Playwright Test Run Execution Flow:

![Playwright Automaton Framewok Test Flow](<Playwright Automation Framework Test Execution Flow.png>)

## Running the tests
There are many different ways to run your tests in. Here are some of the ways 

### VSCode IDE
In VSCode IDE, you use the VSCode playwright extension called "Playwright Test for VSCode", this will allow you to start using the IDE debugger and test button as supported by Microsoft. 

### Commandline
You can run this command in VSCode or in another terminal and the command would be:
```
    npx playwright -test [tags - optional]
```
#### Running a specific set of tests
For running specific set of tests, we can utilize tags by adding @ sign and the tag name. 

For example:
```
    npx playwright -test @general
```
#### Running a specific browser
For running specific browser, we can use the --project command key and specified the a specific project. As you see in the playwright.config.ts file, browsers are organized into projects which the test will run from, so to specified
how to run a specific project you will do the following:

```
    npx playwright -test [--project=(name of the project in config file)]
```

Example:
```
    npx playwright test --project=chromium    
```

### Playwright GUI
A newer for the Playwright automation framework, you can bring up the GUI to see how the test run from your local machine, all you need to do is to run the following:

```
    npx playwright test --ui
```
### Playwright Code Generator
Another function that can help quickly get started is to use the Playwright code generator that records your tests as you interact with the application. To get started, you can type in the terminal the following:

```
    npx playwright codegen [url - optional]
```

Example:
```
    npx playwright codegen google.com
```

## Key Assumptions
Below are some key assumptions made from the challenge when making the best algorithm:
- Due to the long Amazon account creation and deletion process, the tests are created with the assumption that a valid account exists.
- Amazon valid accounts will require valid phone numbers for One Time Password