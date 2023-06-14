import translate from '@iamtraction/google-translate';
import slug from 'limax';

const translatePhrase = async (phrase, into = 'en') => {
  const result = await translate(phrase, { to: into }).then((res) => res.text).catch((err) => {
    console.error(err);
  });
  console.log(result);
  return result;
};

const chineseToPinyin = (phrase) => slug(phrase, ' ');

export { translatePhrase, chineseToPinyin };
