const { $ } = require("@wdio/globals");
const Page = require("./page");

class DynamicLoadingPage extends Page {
  ExampleLink(linkIndex) {
    return $(`a[href="/dynamic_loading/${linkIndex}"]`);
  }

  get StartButton() {
    return $("#start button");
  }
  get Indicator() {
    return $("#loading");
  }
  get FinishText() {
    return $("#finish");
  }

  async ClickExampleLink(num) {
    return (await this.ExampleLink(num)).click();
  }
  async ClickStartButton() {
    await this.StartButton.click();
  }
  async isExampleLinkExisting(index) {
    return await this.ExampleLink(index).isExisting();
  }
  async isStartButtonExisting() {
    return await this.StartButton.isExisting();
  }
  async isIndictorExisting() {
    return await this.Indicator.isExisting();
  }
  async isElementExisting(element) {
    return await element.isExisting();
  }

  open() {
    return super.open("dynamic_loading");
  }
}

module.exports = new DynamicLoadingPage();
