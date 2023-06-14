import { translatePhrase, chineseToPinyin } from "./translator.js";

class BuildPhrase {
  constructor(phrase) {
    this.chinese = chinese;
    this.english = english;
    this.count = count;
    this.pinyin = pinyin;
    this.id = 123;
  }
}

translatePhrase('我爱你');

// const iLoveYou = new BuildPhrase('我爱你', 'Wǒ ài nǐ', 'I love you', 0);
// console.log(iLoveYou);
// export default BuildPhrase;
// {
//     "chinese": "我爱你",
//     "pinyin": "Wǒ ài nǐ",
//     "english": [ 'I love you' ],
//     "count": 0,
//     "id": 1
// }
