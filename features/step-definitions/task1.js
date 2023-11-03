const { Given, When, Then } = require("@cucumber/cucumber");
const homePage = require("../pageobjects/homePage");
const addRemoveElementPage = require("../pageobjects/addRemoveElementPage");
const dynamicLoadingPage = require("../pageobjects/dynamicLoadingPage");
const exampleLink = 2;
Given(/^I am on the Home Page$/, async () => {
  await homePage.open();
});

When(/^I click the Add remove Element link$/, async () => {
  await homePage.clickAddRemoveElementLink();
});

Then(/^I am on the Add remove Element page$/, async () => {
  await expect(addRemoveElementPage.isAddRemoveElementPageDisplayed());
});

When(/^I click add element button$/, async () => {
  await addRemoveElementPage.clickAddElement();
});

Then(/^I see an element is added$/, async () => {
  await expect(addRemoveElementPage.isElementDisplayed());
});

When(/^i click delete button$/, async () => {
  await addRemoveElementPage.clickDeleteElement();
});

Then(/^Element is deleted$/, async () => {
  await expect(addRemoveElementPage.isElementDisplayed()).toBeTruthy()
});
//test case 2

When(/^I click dynamic loading link$/, async () => {
  await homePage.clickDynamicLoadingLink();
});

Then(/^I see Dynamically Loaded Page Elements page is opened$/, async () => {
  await expect(dynamicLoadingPage.isExampleLinkExisting(exampleLink));
});

When(
  /^I Click on the Example 2: Element rendered after the fact link$/,
  async () => {
    await dynamicLoadingPage.clickExampleLink(exampleLink);
  }
);

Then(
  /^I see the Example 2: Element rendered after the fact is opened$/,
  async () => {
    await expect(dynamicLoadingPage.isStartButtonExisting());
  }
);

When(/^I Click on the Start button$/, async () => {
  await dynamicLoadingPage.clickStartButton();
});

Then(
  /^I see The loading indicator is displayed. After a while a "Hello World!" message is displayed$/,
  async () => {
    await expect(dynamicLoadingPage.isIndictorExisting());
    await dynamicLoadingPage.finishText.waitForDisplayed();
    await expect(dynamicLoadingPage.finishText).toHaveTextContaining(
      "Hello World!"
    );
  }
);
