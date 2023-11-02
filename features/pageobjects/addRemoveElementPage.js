const { $ } = require("@wdio/globals");
const Page = require("./page");

class AddRemoveElementPage extends Page {
  get addElement() {
    return $('//button[contains(text(),"Add Element")]');
  }

  get deleteElement() {
    return $("button.added-manually");
  }

  async clickAddElement() {
    await this.addElement.click();
  }
  async clickDeleteElement() {
    await this.deleteElement.click();
  }
  async isElementDeleted() {
    return await this.deleteElement.isExisting();
  }
  async isAddRemoveElementPageDisplayed() {
    return await this.addElement.isDisplayed();
  }
  async isElementDisplayed() {
    return await this.deleteElement.isDisplayed();
  }
 
  open() {
    return super.open("add_remove_elements");
  }
}

module.exports = new AddRemoveElementPage();
