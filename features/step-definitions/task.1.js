const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pageobjects/home.page');
const AddRemoveElementPage=require('../pageobjects/add.remove.element.page')
Given(/^I am on the Add Remove Elements page$/, async () => {
	await HomePage.open();
});

When(/^I click the Add remove Element link$/, async() => {
    
    await HomePage.ClickAddRemoveElementLink()
});

Then(/^I am on the Add remove Element page$/, async() => {
	
    await expect(AddRemoveElementPage.AddElement).toBeDisplayed();
});

When(/^I click add element button$/, async() => {
	await AddRemoveElementPage.ClickAddElement()
});

Then(/^I see an element is added$/, async() => {
    
    await expect(AddRemoveElementPage.DeleteElement).toBeDisplayed()
});

When(/^i click delete button$/, async() => {
	await AddRemoveElementPage.ClickAddElement()
});

Then(/^Element is deleted$/,async () => {
	await expect(AddRemoveElementPage.DeleteElement).not.toBeDisplayed()
});
