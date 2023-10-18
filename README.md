<h1>
  Practice test automation with <a href="https://playwright.dev/"> <img width="140" alt="Playwright Logo" src="https://raw.githubusercontent.com/github/explore/60cd2530141f67f07a947fa2d310c482e287e387/topics/playwright/playwright.png" /> </a> on <a href="https://letcode.in/test">Let Code</a>
</h1>

> **Note**
>
> +  **<a href="https://letcode.in/">Let Code</a>** is a set of very clean pages along with video tutorials explaining how to automate interactions.
>
## PLaywright features
End to End testing using:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/

This tests are purely for Playwright features practice to automate interactions with:
- Inputs
- Buttons
- Select :white_check_mark:
- Alert :speech_balloon:
- Frame :point_right:
- Radio :radio_button:
- Window
- Elements :game_die:
- Drag&Drop
- Sort
- Multi-select :dizzy:
- Slider
- Table
- Calendar :calendar:
- Waits :clock130:
- Forms :interrobang:
- File :pencil:
- Shadow :ghost:

## Structure
### Folders
- tests :file_folder: This folder contains actual test scripts. 
- services :file_folder: This folder containse enums,pages and steps. Page functions are functions that return Locators or Promises<> that we solve later. We use those functions in the Steps class. The Steps class literally contains the steps that we will do in the test files to execute a test case (add a book to the cart, open the cart, confirm that the book is in the cart).
- download :file_folder: This folder contains downloaded files for testing purposes.
- test-data :file_folder: This folder contains files with test data.

### Files
- :page_facing_up: .gitignore: This file helps while using git repository
- :page_facing_up: package.json and package-lock.json: Those files helps to track dependencies, create a shortcut for running tests, etc.
- :page_facing_up: playwright.config.ts:  This is the global configuration file for the Playwright
- :page_facing_up: tsconfig.json: This is a config file which helps us avoid some JS syntax errors & use better the TS features.
- :page_facing_up: environments.json: 
- :page_facing_up: selectors.json: This is where we store all selectors.

## Useful Commands
### Run all tests in Playwright
```shell
npm run test
```
### Run tests with TAGs
## Tag = @alert 
```shell
npm run test-a
```
## Tag = @drop
```shell
npm run test-d
```
## Tag = @input
```shell
npm run test-i
```
## Tag = @select
```shell
npm run test-s
```
## Tag = @radio
```shell
npm run test-r
```
## Tag = @slider
```shell
npm run test-sl
```
## Tag = @table
```shell
npm run test-t
```
## Tag = @file
```shell
npm run test-f
```
