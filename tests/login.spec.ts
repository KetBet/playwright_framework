import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { faker } from "@faker-js/faker";

test("invalid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.inputLoginInvalid(faker.person.firstName());
  await loginPage.inputPasswordValid();
  await loginPage.clickLoginButton();

  await expect(page.getByText("Invalid user or password")).toBeVisible();
});
