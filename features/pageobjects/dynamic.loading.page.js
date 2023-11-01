const { $ } = require('@wdio/globals')
const Page = require('./page');


class DynamicLoadingPage extends Page {

    ExampleLink(linkIndex) {

        return $(`a[href="/dynamic_loading/${linkIndex}"]`);
    }

    get StartButton() {
        return $('#start button');
    }
    get Indicator() {
        return $('#loading');
    }
    get FinishText() {
        return $('#finish');
    }


    async ClickExampleLink(num) {

        return (await this.ExampleLink(num)).click()
    }
    async ClickStartButton() {

        await this.StartButton.click();
    }


    open() {
        return super.open('dynamic_loading');
    }
}

module.exports = new DynamicLoadingPage();
