const { $ } = require('@wdio/globals')
const Page = require('./page');


class KeyPage extends Page {
   
      get TextField()
      {
        return $('#target')
      }
      get ResultField()
      {
        return $('#result')
      }
      
    
    open () {
        return super.open('key_presses');
    }
}

module.exports = new KeyPage();
