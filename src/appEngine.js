import fs from 'fs';
// import axios from 'axios';
import rl from 'readline-sync';

const getData = async (file) => {
  const data = await fs.promises.readFile(file, 'utf-8');
  return data;
};

const checkAnswer = (phrase, answer) => {
  if (phrase.english === answer) {
    return 'good answer';
  }
  return `wrong answer  write answer: ${phrase.english}`;
};

const ask = (phrases) => {
  const i = 3;
  const phrase = phrases[i];
  const question = phrase.chinese;
  const answer = rl.question(question);
  const result = checkAnswer(phrase, answer);
  console.log(result);
};

const loadData = async (url) => {
  const data = await getData(url);
  const phrases = JSON.parse(data);
  ask(phrases);
};

loadData('../__fixtures__/phrases1.txt');
