/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getPlayerName = () => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const raiseQuestion = (questionValue) => console.log(`Question: ${questionValue} `);

const getPlayerAnswer = () => readlineSync.question('Your answer: ');

const compareAnswers = (playerAnswer, correctAnswer) => playerAnswer === correctAnswer;

export {
  randomInteger, getPlayerName, raiseQuestion, getPlayerAnswer, compareAnswers,
};
