const { Given, When, Then } = require("@cucumber/cucumber");
const HomePage = require("../pageobjects/home.page");
const AddRemoveElementPage = require("../pageobjects/add.remove.element.page");
const DynamicLoadingPage = require("../pageobjects/dynamic.loading.page");
const exampleLink = 2;
Given(/^I am on the Home Page$/, async () => {
  await HomePage.open();
});

When(/^I click the Add remove Element link$/, async () => {
  await HomePage.ClickAddRemoveElementLink();
});

Then(/^I am on the Add remove Element page$/, async () => {
  await expect(AddRemoveElementPage.AddElement).toBeDisplayed();
});

When(/^I click add element button$/, async () => {
  await AddRemoveElementPage.ClickAddElement();
});

Then(/^I see an element is added$/, async () => {
  await expect(AddRemoveElementPage.DeleteElement).toBeDisplayed();
});

When(/^i click delete button$/, async () => {
  await AddRemoveElementPage.ClickDeleteElement();
});

Then(/^Element is deleted$/, async () => {
  await expect(AddRemoveElementPage.DeleteElement).not.toBeDisplayed();
});
//test case 2

When(/^I click dynamic loading link$/, async () => {
  await HomePage.ClickDynamicLoadingLink();
});

Then(/^I see Dynamically Loaded Page Elements page is opened$/, async () => {
  await expect(DynamicLoadingPage.isExampleLinkExisting(exampleLink));
});

When(
  /^I Click on the Example 2: Element rendered after the fact link$/,
  async () => {
    await DynamicLoadingPage.ClickExampleLink(exampleLink);
  }
);

Then(
  /^I see the Example 2: Element rendered after the fact is opened$/,
  async () => {
    await expect(DynamicLoadingPage.isStartButtonExisting());
  }
);

When(/^I Click on the Start button$/, async () => {
  await DynamicLoadingPage.ClickStartButton();
});

Then(
  /^I see The loading indicator is displayed. After a while a "Hello World!" message is displayed$/,
  async () => {
    await expect(DynamicLoadingPage.isIndictorExisting());
    await DynamicLoadingPage.FinishText.waitForDisplayed();
    await expect(DynamicLoadingPage.FinishText).toHaveTextContaining(
      "Hello World!"
    );
  }
);
