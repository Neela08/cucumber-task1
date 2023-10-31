const { $ } = require('@wdio/globals')
const Page = require('./page');


class AlertPage extends Page {
    
    get JSAlert () {
        return $('//button[text()="Click for JS Alert"]');
    }

    get JSConfirm () {
        return $('//button[text()="Click for JS Confirm');
    }
    get JSPrompt () {
        return $('//button[text()="Click for JS Prompt');
    }
    get Result () {
        return $('#result');
    }
    

    async ClickJSAlert () {
      
        await this.JSAlert.click();
    }
    async ClickJSConfirm () {
      
        await this.JSConfirm.click();
    }
    async ClickJSPrompt () {
      
        await this.JSPrompt.click();
    }

    
    open () {
        return super.open('');
    }
}

module.exports = new AlertPage();
