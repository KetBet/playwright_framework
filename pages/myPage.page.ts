import { type Page } from "@playwright/test";
import BasePage from "./base.page";

const jumpToProjectEl = "#project-jump";
const allProjectsEl = ".drdn-items.all-projects.selection";
const projectRedmine = "#projects-index > ul > li > div > a";

class MyPagePage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async closeAds(): Promise<void> {
    await super.closeAds();
  }

  async goto() {
    await super.goto("my/page");
  }

  async jumpToProject() {
    await this.page.locator(jumpToProjectEl).click();
  }

  async selectAllProjects() {
    await this.page.locator(allProjectsEl).click();
  }

  async getProjectRedmine() {
    return this.page.locator(projectRedmine);
  }
}
export default MyPagePage;
