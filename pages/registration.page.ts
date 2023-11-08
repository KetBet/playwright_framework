import { type Page } from "@playwright/test";
import dataLayer from "../dataLayer.json";
import BasePage from "./base.page";

const loginField = "#user_login";
const passwordField = "#user_password";
const confirmationPasswordField = "#user_password_confirmation";
const firstNameField = "#user_firstname";
const lastNameField = "#user_lastname";
const emailField = "#user_mail";
const submitButton = "input[type=submit]";

class RegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async goto() {
    await super.goto("account/register");
  }

  async enterLogin() {
    await this.page.locator(loginField).fill(dataLayer.login);
  }

  async enterPassword() {
    await this.page.locator(passwordField).fill(dataLayer.password);
  }

  async confirmPassword() {
    await this.page.locator(confirmationPasswordField).fill(dataLayer.password);
  }

  async enterFirstName() {
    await this.page.locator(firstNameField).fill(dataLayer.firstName);
  }

  async enterLastName() {
    await this.page.locator(lastNameField).fill(dataLayer.lastName);
  }

  async enterEmail() {
    await this.page.locator(emailField).fill(dataLayer.email);
  }

  async clickSubmitButton() {
    await this.page.locator(submitButton).click();
  }
}
export default RegistrationPage;
