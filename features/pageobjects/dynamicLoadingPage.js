const { $ } = require("@wdio/globals");
const Page = require("./page");

class DynamicLoadingPage extends Page {
  exampleLink(linkIndex) {
    return $(`a[href="/dynamic_loading/${linkIndex}"]`);
  }

  get startButton() {
    return $("#start button");
  }
  get indicator() {
    return $("#loading");
  }
  get finishText() {
    return $("#finish");
  }

  async clickExampleLink(num) {
    await  this.exampleLink(num).click();
  }
  async clickStartButton() {
    await this.startButton.click();
  }
  async isExampleLinkExisting(index) {
    await  this.exampleLink(index).isExisting();
  }
  async isStartButtonExisting() {
    await  this.startButton.isExisting();
  }
  async isIndictorExisting() {
    await  this.indicator.isExisting();
  }
  

  open() {
    return super.open("dynamic_loading");
  }
}

module.exports = new DynamicLoadingPage();
