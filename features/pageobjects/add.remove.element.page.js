const { $ } = require('@wdio/globals')
const Page = require('./page');


class AddRemoveElementPage extends Page {
    
    get AddElement () {
        return $('//button[contains(text(),"Add Element")]');
    }

    get DeleteElement () {
        return $('button.added-manually');
    }

    

    async ClickAddElement () {
      
        await this.AddElement.click();
    }
    async ClickDeleteElement() {
      
        await this.DeleteElement.click();
    }

    
    open () {
        return super.open('');
    }
}

module.exports = new AddRemoveElementPage();
