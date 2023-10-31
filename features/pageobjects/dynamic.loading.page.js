const { $ } = require('@wdio/globals')
const Page = require('./page');


class DynamicLoadingPage extends Page {
    
    get Example2Link () {
        return $('/html/body/div[2]/div/div/a[2]');
    }

    get StartButton () {
        return $('#start button');
    }
    get Indicator () {
        return $('#loading');
    }
    get FinishText () {
        return $('#finish');
    }
    

    async ClickExample2Link () {
      
        await this.Example2Link.click();
    }
    async ClickStartButton () {
      
        await this.StartButton.click();
    }

    
    open () {
        return super.open('dynamic_loading');
    }
}

module.exports = new DynamicLoadingPage();
