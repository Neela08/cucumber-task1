const Page = require("./page");

class DownloadPage extends Page {
  downloadLink(fileName) {
    return $(`//*[@class="example"]//a[contains(text(),'${fileName}')]`);
  }
  async clickDownloadLink(fileName) {
    await this.downloadLink(fileName).click();
  }
  open() {
    return super.open("download");
  }
}
module.exports = new DownloadPage();
