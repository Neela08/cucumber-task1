const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const path = require("path");
const downloadPage = require("../pageobjects/downloadPage");
const filename = "some-file.txt";
const fs = require("fs");
const homePage = require("../pageobjects/homePage");
const file_path = path.join(path.join(process.cwd(), "tempDownload"));

async function assertFileIsDownloaded(filename) {
  const downloadedFilePath = path.join(
    `${file_path}/${browser.capabilities.browserName}/${filename}`
  );

  const fileExists = await fs.existsSync(downloadedFilePath);

  expect(fileExists).toBe(true);
}

When(/^I click download files$/, async () => {
  homePage.clickDownloadLink();
});

Then(/^I am on the download page$/, async () => {
  await downloadPage.downloadLink(filename).isDisplayed();
});

When(/^I click on a file name$/, async () => {
  await downloadPage.clickDownloadLink(filename);
});

Then(/^i can see file is downloaded$/, async () => {
  await assertFileIsDownloaded(filename);
});
