import fs from 'fs';
import nock from 'nock';
import axios from 'axios';
import rl from 'readline-sync';

const testURL = 'https://fakedb.com';
nock(testURL).get('/').reply(200, async () => {
  const data = await fs.promises.readFile('./instance.json', 'utf-8');
  return data;
});

const checkAnswer = (phrase, answer) => {
  const correctAnswer = phrase.english;
  const result = correctAnswer[0] === answer;
  if (result) {
    return `${answer} is correct!`;
  }
  return `${answer} is wrong answer!`;
};

const ask = (data) => {
  const words = data;
  const n = 0;
  const phrase = words[n];
  const question = rl.question(`${words[n].chinese}\n`);
  return console.log(checkAnswer(phrase, question));
};

const loadApp = (url) => new Promise((resolve) => {
  const data = axios.get(url);
  // const data = fs.promises.readFile('./words.js', 'utf-8');
  resolve(data);
}).then((response) => {
  console.log(response.data);
  // ask(response.data.data);
}).catch((err) => {
  throw new Error(err);
});

loadApp(testURL);
