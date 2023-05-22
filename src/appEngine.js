import nock from 'nock';
import fs from 'fs';
import axios from 'axios';

const testURL = 'https://fakedb.com';
nock(testURL).get('/').reply(200, async () => {
  const data = await fs.promises.readFile('./instance.json', 'utf-8');
  return data;
});

const ask = (url) => new Promise((resolve) => {
    const data = axios.get(url);
    // const data = fs.promises.readFile('./words.js', 'utf-8');
    resolve(data);
}).then((response) => console.log(response.data.data));

ask(testURL);

const checkAnswer = () => {
    // check user's answer
};