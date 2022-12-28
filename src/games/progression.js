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

  for (let i = 0; i < 3; i += 1) {
    const questionSerNum = getSeriesArithmeticProgression();

    correctAnswers.push(...questionSerNum.splice(randomInteger(0, 9), 1, '..'));
    questions.push(questionSerNum.join(' '));
  }
  playGame(playerTask, questions, correctAnswers);
}
