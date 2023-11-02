const { $ } = require("@wdio/globals");
const Page = require("./page");

class AlertPage extends Page {
  getJsButtonByText(txt) {
    return $(`//button[text()="${txt}"]`);
  }
  get Result() {
    return $("#result");
  }

  async clickJSButton(buttonText) {
    return await this.getJsButtonByText(buttonText).click();
  }

  async isJSButtonExisting(buttonText) {
    return this.getJsButtonByText(buttonText).isExisting();
  }

  open() {
    return super.open("javascript_alerts");
  }
}

module.exports = new AlertPage();
