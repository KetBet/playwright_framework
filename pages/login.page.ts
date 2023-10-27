import { type Page } from "@playwright/test";
import dataLayer from "../dataLayer.json";
import { faker } from "@faker-js/faker";
import BasePage from "./base.page";

const loginInputField = "#username";
const passwordInputField = "#password";
const loginButtonEl = "#login-submit";

const randomName = faker.person.firstName();

class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/login');
  }

  async inputLoginValid() {
    await this.page.locator(loginInputField).fill(dataLayer.login);
  }

  async inputLoginInvalid() {
    await this.page.locator(loginInputField).fill(randomName);
  }

  async inputPasswordValid() {
    await this.page.locator(passwordInputField).fill(dataLayer.password);
  }

  async clickLoginButton() {
    await this.page.locator(loginButtonEl).click();
  }

  async login() {
    await this.inputLoginValid();
    await this.inputPasswordValid();
    await this.clickLoginButton();
  }
}

export default LoginPage;
