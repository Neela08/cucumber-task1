
const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pageobjects/home.page');
const HoverPage = require('../pageobjects/hover.page');
const AlertPage=require('../pageobjects/alert.page');
const keyPage = require('../pageobjects/key.page');
let send_text=""
const image_number=2;
const Randomizing=require('../../Utils/random.text') ;

//test case 3

When(/^I click the hovers link$/,async() => {
    await HomePage.ClickHoverLink()
});

Then(/^I am on the hovers page$/, async() => {
	await expect(HoverPage.locateUserImage(image_number)).toBeExisting()
   
});

When(/^I Hover over the profile image of user2$/, async() => {
    
    await HoverPage.locateUserImage(image_number).moveTo();
   
});

Then(/^I see name: user 2 and view profile link are displayed under the image on hover$/, async() => {
    await expect(HoverPage.locateUserProfile(image_number)).toBeDisplayed()
	
});




//test case 4


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



When(/^I click on the JavaScript Alerts link$/, async() => {
    await HomePage.ClickJSAlertLink()
});

Then(/^I am on the JavaScript Alerts page$/, async() => {
	
    await expect(AlertPage.JSAlert).toBeExisting()
});

When(/^I press Click for JS Alert button$/, async() => {
	await AlertPage.ClickJSAlert()
});

Then(/^User prompt with "([^"]*)" is shown$/, async(args1) => {
	const alertText =  await browser.getAlertText() ;
     expect(alertText).toEqual(args1);
});


When(/^I close the alert$/, async() => {
	await browser.acceptAlert()
});

Then(/^I can see the user prompt is closed$/, async() => {
	
    
    let flag=true
    try{
         flag=await browser.getAlertText()
    }catch
    {
         flag=false
    }
    expect(flag).toBeFalsy();
});

When(/^I Click the Click for JS Confirm button$/, async() => {
	await AlertPage.ClickJSConfirm()
});




When(/^I click cancel button$/, async() => {
	await browser.dismissAlert()
});


Then(/^The message that you've clicked Cancel is shown under the results section$/, async() => {
	await expect(AlertPage.Result).toHaveTextContaining('You clicked: Cancel')
});


When(/^I Click the Click for JS Prompt button$/, async() => {
	
	await AlertPage.ClickJSPrompt()
});



When(/^I Enter any text into the prompt and click ok$/, async() => {
    send_text =Randomizing.generateRandomText(5)
	await browser.sendAlertText(send_text)
	await browser.acceptAlert()
});

Then(/^The text, that I have entered is displayed under the results section$/,async () => {


    await expect(AlertPage.Result).toHaveTextContaining(send_text);
	
});







