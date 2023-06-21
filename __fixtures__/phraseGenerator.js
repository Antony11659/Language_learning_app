import translate from '@iamtraction/google-translate';
import slug from 'limax';
import fs from 'fs';

// row data for phrases
const rowData = fs.readFileSync('./text.txt', 'utf8');
// take row data from server and make  phrases

const translatePhrase = async (phrase, into = 'en') => {
  const result = await translate(phrase, { to: into }).then((res) => res.text).catch((err) => {
    console.error(err);
  });
  return result;
};

const buildPhrase = async (phrase) => {
  const chinese = phrase;
  const english = await translatePhrase(phrase);
  const pinyin = slug(phrase, ' ');
  const count = 0;
  const newPhrase = {
    chinese,
    english,
    pinyin,
    count,
  };
  return newPhrase;
};

const convertTextIntoPhrases = async (text) => {
  const arr = text.split(',');
  const phrases = await Promise.all(arr.map(async (el) => {
    const newEl = await buildPhrase(el);
    return newEl;
  }));
  await fs.promises.writeFile('./phrases1.txt', JSON.stringify(phrases));
};

// build the file with phrases and save it to the server

convertTextIntoPhrases(rowData);
