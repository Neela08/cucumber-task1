const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const path = require("path");
const DownloadPage = require("../pageobjects/download.page");
const filename = "text.txt";
const fs = require("fs");
const file_path = path.join(path.join(process.cwd(), "tempDownload"));

async function assertFileIsDownloaded(filename) {
  const downloadedFilePath = path.join(
    `${file_path}/${browser.capabilities.browserName}/${filename}`
  );

  const fileExists = await fs.existsSync(downloadedFilePath);

  expect(fileExists).toBe(true);
}

When(/^I click download files$/, async () => {
  DownloadPage.open();
});

Then(/^I am on the download page$/, async () => {
  await DownloadPage.downloadLink(filename).isDisplayed();
});

When(/^I click on a file name$/, async () => {
  await DownloadPage.ClickDownloadLink(filename);
});

Then(/^i can see file is downloaded$/, async () => {
  await assertFileIsDownloaded(filename);
});
