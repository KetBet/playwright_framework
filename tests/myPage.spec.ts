import { test, expect } from "@playwright/test";
import MyPagePage from "../pages/myPage.page";
import LoginPage from "../pages/login.page";

test.describe("my page", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
  });

  test("jump to a project", async ({ page }) => {
    const myPagePage = new MyPagePage(page);

    await myPagePage.closeAds();

    await myPagePage.goto();
    await myPagePage.jumpToProject();
    await myPagePage.selectAllProjects();

    await expect(page).toHaveTitle(/Projects/);
    await expect(await myPagePage.getProjectRedmine()).toBeVisible();
  });
});
