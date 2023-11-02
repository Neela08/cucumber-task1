const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get addRemoveElementLink() {
    return $('a[href="/add_remove_elements/"]');
  }

  get dynamicLoadingLink() {
    return $('a[href="/dynamic_loading"]');
  }

  get jsAlertLink() {
    return $('//a[text()="JavaScript Alerts"][@href="/javascript_alerts"]');
  }
  get downloadLink() {
    return $('a[href="/download"]');
  }

  get keyPageLink() {
    return $('a[href="/key_presses"]');
  }
  get hoverLink() {
    return $('a[href="/hovers"]');
  }
  async clickKeyPageLink() {
    await this.keyPageLink.click();
  }
  async clickAddRemoveElementLink() {
    await this.addRemoveElementLink.click();
  }
  async clickDynamicLoadingLink() {
    await this.dynamicLoadingLink.click();
  }
  async clickJSAlertLink() {
    await this.jsAlertLink.click();
  }

  async clickHoverLink() {
    await this.hoverLink.click();
  }
  async clickDownloadLink() {
    await this.downloadLink.click();
  }
  open() {
    return super.open("");
  }
}

module.exports = new HomePage();
