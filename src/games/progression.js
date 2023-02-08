import { randomInteger, playGame } from '../index.js';

function getSeriesArithmeticProgression() {
  const arrSerNum = [];
  const progressionStep = randomInteger(1, 5);
  const firstNum = randomInteger(0, 100);

  for (let j = 0; j < 10; j += 1) {
    arrSerNum.push(`${firstNum + progressionStep * j}`);
  }
  return arrSerNum;
}

export default function progressionGame() {
  const playerTask = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswers = [];
  const numberQuestions = 3;

  for (let i = 0; i < numberQuestions; i += 1) {
    const numberSeries = getSeriesArithmeticProgression();
    const correctAnswer = numberSeries.splice(randomInteger(0, 9), 1, '..').toString();
    const question = numberSeries.join(' ');

    correctAnswers.push(correctAnswer);
    questions.push(question);
  }
  playGame(playerTask, questions, correctAnswers, numberQuestions);
}
