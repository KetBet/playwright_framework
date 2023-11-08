import { type Page } from "@playwright/test";
import dataLayer from "../dataLayer.json";
import BasePage from "./base.page";

const loginInputField = "#username";
const passwordInputField = "#password";
const loginButtonEl = "#login-submit";

class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async goto() {
    await super.goto('login');
  }

  async inputLoginValid() {
    await this.page.locator(loginInputField).fill(dataLayer.login);
  }

  async inputLoginInvalid(randomName: string) {
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
