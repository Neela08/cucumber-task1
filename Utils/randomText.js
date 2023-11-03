const { $ } = require("@wdio/globals");
regex = /[a-zA-Z0-9]/;
text = "";
class Randomizing {
   
   generateRandomText(length) {
   
    for (let i = 0; i < length; i++) {
      const randomCharacter = regex[Math.floor(Math.random() * regex.length)];
      text += randomCharacter;
    }
  
    return text;
  }
  
  
  

}

module.exports = new Randomizing();
