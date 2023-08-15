Formedix Technical Test README
======================

This project contains a Playwright test automation framework using the Page Object Model (POM) design pattern for the Formedix ryze application. It provides a structured way to interact with the application's UI elements and perform automated tests.
Playwright is an open-source automation tool which was developed by Microsoft and released in 2020. It supports JavaScript language which is well known for it's Simplicity since it is easy to understand and learn.

Files:
------

1. FormedixPOM.js
   This file defines the `Formedix` class, which represents the Page Object Model for the Formedix application. It contains methods for interacting with various UI elements and performing specific actions, such as signing in, navigating to forms, and updating medical history.

2. FormedixTest.spec.js
   This test script file utilizes the `Formedix` class from `FormedixPOM.js` to perform end-to-end tests on the Formedix application. It uses Playwright's test framework to execute test cases, including signing in, navigating to forms, updating medical history and signing out.

Usage:
------

1. Install Dependencies
   Before running the tests, ensure you have the necessary dependencies installed. You can install them by running:
   
npm install @playwright/test


2. Configuration
Update the `FormedixTest.SignIn` method in `Formedix.spec.js` with the appropriate username and password for your Formedix account.
Test directory in playwright.config.js should be defined as testDir: './Formedix/FormedixTest',

3. Test Data
When updating the 'Description' section in 'Edit forms', make sure that the text value in 'Locale' field is not the same with the existing 'Locale' text values if there is any.
The user can just update the values for the parameters EnterText, EnterLocale and UpdatedText before starting every run.

4. Running Tests
To run the tests, execute any of the the following command in your terminal:

npx playwright test (Run the test using all available browsers)
npx playwright test .\\Formedix\\FormedixTest\\FormedixTest.spec.js --project chromium (Run the test without opening a Google Chrome browser)
npx playwright test .\\Formedix\\FormedixTest\\FormedixTest.spec.js --project chromium --headed (Run the test using Google Chrome browser)

This command will run the tests defined in `FormedixTest.spec.js` using Playwright's test runner.

Author:
-------
[Lynel Angelo D. Gabrie]
[lyneladgabriel@gmail.com]