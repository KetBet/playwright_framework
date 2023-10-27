import { test, expect } from "@playwright/test";
import RegistrationPage from "../pages/registration.page";

test("invalid registration", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.enterLogin();
  await registrationPage.enterPassword();
  await registrationPage.confirmPassword();
  await registrationPage.enterFirstName();
  await registrationPage.enterLastName();
  await registrationPage.enterEmail();
  await registrationPage.clickSubmitButton();

  await expect(page).toHaveURL(`/account/register`);
});
