const { $ } = require('@wdio/globals')
const Page = require('./page');


class HoverPage extends Page {
   
      locateUserImage(index)
      {
        const images = $$('.example .figure img');
        const img = images[index-1];
        return img;
      }
      locateUserProfile(index)
      {
        const anchorTags = $$('.example .figure a');

        return anchorTags[index-1];
      }
  
    
    
    open () {
        return super.open('hovers');
    }
}

module.exports = new HoverPage();
