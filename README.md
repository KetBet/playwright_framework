# Playwright_framework
This repository contains simple automation test framework written with TypeScript and Playwright and implements Page Object Model Pattern.

Steps to run tests locally:
1. Clone the repository.
2. Make sure you have `node.js` installed. For more info visit [official website](https://nodejs.org/en/download) for instructions.
3. Run `npm install` to install node modules.
4. Playwright can install supported browsers. Running the command without arguments will install the default browsers: `npx playwright install`.
5. Use `npx playwright test` to run test in 3 browsers (chromium, firefox, webkit) in parallel.
6. A quick way of opening the last HTML test run report is `npx playwright show-report`. More information about Playwright reporters [here](https://playwright.dev/docs/test-reporters#introduction).
