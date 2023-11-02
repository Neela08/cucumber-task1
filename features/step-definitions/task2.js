const { Given, When, Then } = require("@cucumber/cucumber");
const homePage = require("../pageobjects/homePage");
const hoverPage = require("../pageobjects/hoverPage");
const alertPage = require("../pageobjects/alertPage");
const keyPage = require("../pageobjects/keyPage");
const imageNumber = 2;
const randomizing = require("../../Utils/randomText");
let sendText = "";

// Test case 3

Given(/^I am on the Home page$/, async () => {
  await browser.get("https://the-internet.herokuapp.com/");
});

When(/^I click the hovers link$/, async () => {
  await homePage.clickHoverLink();
});

Then(/^I am on the hovers page$/, async () => {
  await expect(hoverPage.isUserImageExisting(imageNumber));
});

When(/^I Hover over the profile image of user "([^"]*)"$/, async (args1) => {
  await hoverPage.locateUserImage(args1).moveTo();
});

Then(
  /^I see name: user "([^"]*)" and view profile link are displayed under the image on hover$/,
  async (args1) => {
    await expect(hoverPage.isUserProfileExisting(args1));
  }
);

// Test case 4

Given(/^I am on the Home page$/, async () => {
  await browser.get("https://the-internet.herokuapp.com/");
});

When(/^I click on the key press link$/, async () => {
  await homePage.clickKeyPageLink();
});

Then(/^I am on the Key Press page$/, async () => {
  await expect(keyPage.isTextFieldExisting());
});

When(/^I press Backspace key$/, async () => {
  await browser.keys(["Backspace"]);
});

Then(/^I can see the message "([^"]*)"$/, async (args1) => {
  await expect(keyPage.resultField).toHaveTextContaining(args1);
});

// Test case 5

Given(/^I am on the Home page$/, async () => {
  await browser.get("https://the-internet.herokuapp.com/");
});

When(/^I click on the JavaScript Alerts link$/, async () => {
  await homePage.clickJSAlertLink();
});

Then(/^I am on the JavaScript Alerts page$/, async () => {
  await expect(alertPage.isJSButtonExisting("Click for JS Alert"));
});

When(/^I press "([^"]*)"$/, async (args1) => {
  await alertPage.clickJSButton(args1);
});

Then(/^User prompt with "([^"]*)" is shown$/, async (args1) => {
  const alertText = await browser.getAlertText();
  expect(alertText).toEqual(args1);
});

When(/^I close the alert$/, async () => {
  await browser.acceptAlert();
});

Then(/^I can see the user prompt is closed$/, async () => {
  let flag = true;
  try {
    flag = await browser.getAlertText();
  } catch {
    flag = false;
  }
  expect(flag).toBeFalsy();
});

When(/^I click cancel button$/, async () => {
  await browser.dismissAlert();
});

Then(
  /^The message that you've clicked Cancel is shown under the results section$/,
  async () => {
    await expect(alertPage.result).toHaveTextContaining("You clicked: Cancel");
  }
);

When(/^I Enter any text into the prompt and click ok$/, async () => {
  sendText = randomizing.generateRandomText(5);
  await browser.sendAlertText(sendText);
  await browser.acceptAlert();
});

Then(
  /^The text, that I have entered is displayed under the results section$/,
  async () => {
    await expect(alertPage.result).toHaveTextContaining(sendText);
  }
);
