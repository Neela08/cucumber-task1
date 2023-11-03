const { $ } = require("@wdio/globals");
const Page = require("./page");

class KeyPage extends Page {
  get textField() {
    return $("#target");
  }
  get resultField() {
    return $("#result");
  }
  async isTextFieldExisting() {
    return await this.textField.isExisting();
  }

  open() {
    return super.open("key_presses");
  }
}

module.exports = new KeyPage();
