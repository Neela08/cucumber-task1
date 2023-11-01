const { $ } = require('@wdio/globals')
class Randomizing{
  
   generateRandomText(length) {
   
    let text = '';

    for (let i = 0; i < length; i++) {
      
      const randomCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

      text += randomCharacter;
    }

    return text;
  }
}

  module.exports = new Randomizing();