const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get AddRemoveElementLink() {
    return $('a[href="/add_remove_elements/"]');
  }

  get DynamicLoadingLink() {
    return $('a[href="/dynamic_loading"]');
  }

  get JSAlertLink() {
    return $('//a[text()="JavaScript Alerts"][@href="/javascript_alerts"]');
  }

  get KeyPageLink() {
    return $('a[href="/key_presses"]');
  }
  get HoverLink() {
    return $('a[href="/hovers"]');
  }
  async ClickKeyPageLink() {
    await this.KeyPageLink.click();
  }
  async ClickAddRemoveElementLink() {
    await this.AddRemoveElementLink.click();
  }
  async ClickDynamicLoadingLink() {
    await this.DynamicLoadingLink.click();
  }
  async ClickJSAlertLink() {
    await this.JSAlertLink.click();
  }

  async ClickHoverLink() {
    await this.HoverLink.click();
  }
  open() {
    return super.open("");
  }
}

module.exports = new HomePage();
