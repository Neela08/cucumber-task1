const { $ } = require('@wdio/globals')
const Page = require('./page');


class HomePage extends Page {

    get AddRemoveElementLink() {
        return $('//*[@id="content"]/ul/li[2]/a');
    }

    get DynamicLoadingLink() {
        return $('a[href="/dynamic_loading"]');
    }

    get JSAlertLink() {
        return $('//a[text()="JavaScript Alerts"][@href="/javascript_alerts"]');
    }

    async ClickAddRemoveElementLink() {

        await this.AddRemoveElementLink.click();
    }
    async ClickDynamicLoadingLink() {

        await this.DynamicLoadingLink.click();
    }
    async ClickJSAlertLink() {

        await this.JSAlertLink.click();
    }


    open() {
        return super.open('');
    }
}

module.exports = new HomePage();
