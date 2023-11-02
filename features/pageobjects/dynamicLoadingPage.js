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
    return (await this.exampleLink(num)).click();
  }
  async clickStartButton() {
    await this.startButton.click();
  }
  async isExampleLinkExisting(index) {
    return await this.exampleLink(index).isExisting();
  }
  async isStartButtonExisting() {
    return await this.startButton.isExisting();
  }
  async isIndictorExisting() {
    return await this.indicator.isExisting();
  }
  

  open() {
    return super.open("dynamic_loading");
  }
}

module.exports = new DynamicLoadingPage();
