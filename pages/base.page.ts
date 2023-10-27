import { type Page } from "@playwright/test";

export default class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/");
  }
}
