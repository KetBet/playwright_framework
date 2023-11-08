import { type Page } from "@playwright/test";

export default class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = "") {
    await this.page.goto(`/${path}`);
  }

  async closeAds() {
    await this.page.route("**/*", (route) => {
      route.request().url().startsWith("https://googleads.")
        ? route.abort()
        : route.continue();
      return;
    });
  }
}
