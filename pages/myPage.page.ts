import { type Page } from "@playwright/test";
import BasePage from "./base.page";

const jumpToProjectEl = "#project-jump";
const allProjectsEl = ".drdn-items.all-projects.selection";

class MyPagePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto(`/my/page`);
  }

  async jumpToProject() {
    await this.page.locator(jumpToProjectEl).click();
  }

  async selectAllProjects() {
    await this.page.locator(allProjectsEl).click();
  }
}
export default MyPagePage;
