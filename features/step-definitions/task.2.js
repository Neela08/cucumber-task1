
const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pageobjects/home.page');
const HoverPage = require('../pageobjects/hover.page');
const AlertPage=require('../pageobjects/alert.page');
const send_text='sadia'
const image_number=2;

//test case 3

Given(/^I am on the Home page$/,async () => {
	await HomePage.open()
});

When(/^I click the hovers link$/,async() => {
    await HomePage.ClickHoverLink()
});

Then(/^I am on the hovers page$/, async() => {
	await expect(HoverPage.locate_User_Image(image_number)).toBeExisting()
   
});

When(/^I Hover over the profile image of user2$/, async() => {
    
    await HoverPage.locate_User_Image(image_number).moveTo();
   
});

Then(/^I see name: user 2 and view profile link are displayed under the image on hover$/, async() => {
    await expect(HoverPage.locate_User_Profile(image_number)).toBeDisplayed()
	
});




//test case 4

Given(/^I am on the Home page$/, async() => {
	await HomePage.open()
});

When(/^I click on the key press link$/, async() => {
	
    await HomePage.ClickKeyPageLink()
});

Then(/^I am on the Key Press page$/, async() => {
	
    await expect(keyPage.TextField).toBeExisting()
});

When(/^I press Backspace key$/, async() => {
    
    await browser.keys(['Backspace'])
});

Then(/^I can see the message You entered: BACK_SPACE$/,async () => {
	
    await expect(keyPage.ResultField).toHaveTextContaining('You entered: BACK_SPACE')
});



//test case 5


Given(/^I am on the Home page$/, async() => {
	await HomePage.open()
});

When(/^I click on the JavaScript Alerts link$/, async() => {
    await HomePage.ClickJSAlertLink()
});

Then(/^I am on the JavaScript Alerts page$/, async() => {
	
    await expect(AlertPage.JSAlert).toBeExisting()
});

When(/^I press Click for JS Alert button$/, async() => {
	await AlertPage.ClickJSAlert()
});

Then(/^I can see the Alert$/, async() => {
    
	let alertText = await browser.getAlertText() ;
    expect(alertText).toEqual('I am a JS Alert');
});

When(/^I close the alert$/, async() => {
	browser.acceptAlert()
});

Then(/^I can see the alert is closed$/, async() => {
	const isAlertOpen = await browser.isAlertOpen();
    expect(isAlertOpen).toBeFalsy();
});

When(/^I Click the Click for JS Confirm button$/, async() => {
	await AlertPage.ClickJSConfirm()
});

Then(/^Confirm with "I am a JS Confirm" text is shown$/, async() => {
    let alertText = await browser.getAlertText() ;
    expect(alertText).toEqual('I am a JS Confirm');
});

When(/^I Click the cancel button$/, async() => {
	browser.dismissAlert()
});

Then(/^Confirm is closed and The message that you've clicked Cancel is shown under the results section$/, async() => {
	await expect(AlertPage.Result).toHaveTextContaining('You clicked: Cancel')
});


When(/^I Click the Click for JS Prompt button$/, async() => {
	
	await AlertPage.ClickJSPrompt()
});

Then(/^Prompt with "I am a JS Prompt" text is shown$/, async() => {
	let alertText = await browser.getAlertText() ;
    expect(alertText).toEqual('I am a JS prompt');
});

When(/^I Enter any text into the prompt and click ok$/, async() => {
	browser.sendAlertText(send_text)
    await browser.waitUntil(async () => await browser.isAlertOpen());
	browser.acceptAlert()
});

Then(/^Prompt is closed. The text, that I have entered is displayed under the results section$/,async () => {


    await expect(AlertPage.Result).toHaveTextContaining(send_text);
	
});




