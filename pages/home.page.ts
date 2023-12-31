import { type Page } from "@playwright/test";
import BasePage from "./base.page";

const redmineBooksEl = 'ul.toc.right [href="#Redmine-books"]';
const buyItOnlineLink = "tbody > tr:nth-child(2) > td:nth-child(3) > a";
const issuesLink = "a.issues";
const newIssueEl = "a.icon.icon-add.new-issue";
const issuesTable = "#content > form:nth-child(4) > div > table";
const newIssueForm = "#issue-form";

class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async closeAds(): Promise<void> {
    await super.closeAds();
  }

  async goto() {
    await super.goto();
  }

  async redmineBookElClick() {
    await this.page.locator(redmineBooksEl).click();
  }

  async buyItOnlineClick() {
    await this.page.locator(buyItOnlineLink).click();
  }

  async clickIssueLink() {
    await this.page.locator(issuesLink).click();
  }

  async addNewIssue() {
    await this.page.locator(newIssueEl).click();
  }

  async getIssuesTable() {
    return this.page.locator(issuesTable);
  }

  async getNewIssueForm() {
    return this.page.locator(newIssueForm);
  }
}
export default HomePage;
