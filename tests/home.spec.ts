import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
  });

  test("buy redmine book online", async ({ page }) => {
    const homePage = new HomePage(page);

    await page.route("**/*", (route) => {
      route.request().url().startsWith("https://googleads.")
        ? route.abort()
        : route.continue();
      return;
    });

    await homePage.goto();
    await homePage.redmineBookElClick();
    await homePage.buyItOnlineClick();

    await expect(page).toHaveURL(
      `https://www.packtpub.com/product/redmine-cookbook/9781785286131`
    );
  });

  test("should add new issue", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.closeAds();

    await homePage.goto();
    await homePage.clickIssueLink();

    await expect(await homePage.getIssuesTable()).toBeVisible();

    await homePage.addNewIssue();

    await expect(page).toHaveURL(`/projects/redmine/issues/new`);
    await expect(await homePage.getNewIssueForm()).toBeVisible();
  });
});
