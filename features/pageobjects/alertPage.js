const { $ } = require("@wdio/globals");
const Page = require("./page");

class AlertPage extends Page {
  getJsButtonByText(txt) {
    return $(`//button[text()="${txt}"]`);
  }
  get result() {
    return $("#result");
  }

  async clickJSButton(buttonText) {
    await  this.getJsButtonByText(buttonText).click();
  }

  async isJSButtonExisting(buttonText) {
    await this.getJsButtonByText(buttonText).isExisting();
  }

  open() {
    return super.open("javascript_alerts");
  }
}

module.exports = new AlertPage();
