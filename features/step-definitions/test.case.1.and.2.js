
const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^I am on the Add Remove Elements page$/, async () => {
	await browser.url('https://the-internet.herokuapp.com/')
});

When(/^I click the Add remove Element link$/, async() => {
    await $('//*[@id="content"]/ul/li[2]/a').click()
});

Then(/^I am on the Add remove Element page$/, async() => {
	await expect($('//button[contains(text(),"Add Element")]')).toBeDisplayed()
});

When(/^I click add element button$/, async() => {
	await $('//button[contains(text(),"Add Element")]').click()
});

Then(/^I see an element is added$/, async() => {
    
    await expect($('button.added-manually')).toBeDisplayed()
});

When(/^i click delete button$/, async() => {
	await $('button.added-manually').click()
});

Then(/^Element is deleted$/,async () => {
	await expect($('button.added-manually')).not.toBeDisplayed()
});

//test case 2

Given(/^I am on the Home page$/, async () => {
	await browser.url('https://the-internet.herokuapp.com/')
});

When(/^I click dynamic loading link$/, async() => {
    
    await $('a[href="/dynamic_loading"]').click()
});

Then(/^I see Dynamically Loaded Page Elements page is opened$/, async() => {
	
    await expect($('/html/body/div[2]/div/div/a[2]')).toBeExisting()
   
});

When(/^I Click on the Example 2: Element rendered after the fact link$/, async() => {
	await $('/html/body/div[2]/div/div/a[2]').click()
});

Then(/^I see the Example 2: Element rendered after the fact is opened$/, async() => {
    (await $('#start button')).isExisting()
    // /html/body/div[2]/div/div/div/button
});

When(/^I Click on the Start button$/, async() => {
	await $('#start button').click()
});


Then(/^I see The loading indicator is displayed. After a while a "Hello World!" message is displayed$/, async() => {
    await $('#loading').isExisting()
    await $('#finish').waitForDisplayed()
    await expect($('#finish')).toHaveTextContaining('Hello World!')




});

