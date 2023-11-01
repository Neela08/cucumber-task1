const { $ } = require('@wdio/globals')
const Page = require('./page');


class HoverPage extends Page {
   
      locate_User_Image(index)
      {
        const images = $$('.example .figure img');
        const img = images[index-1];
        return img;
      }
      locate_User_Profile(index)
      {
        const anchorTags = $$('.example .figure a');

        return anchorTags[index-1];
      }
    get AddRemoveElementLink () {
        return $('a[href="/dynamic_loading');
    }

    get DynamicLoadingLink () {
        return $('a[href="/dynamic_loading"]');
    }
    
    
    open () {
        return super.open('hovers');
    }
}

module.exports = new HoverPage();
