import { randomInteger, playGame } from '../index.js';

function getGcd(val1, val2) {
  let x = Math.abs(val1);
  let y = Math.abs(val2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

export default function gcdGame() {
  const playerTask = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswers = [];
  const numberQuestions = 3;

  for (let i = 0; i < numberQuestions; i += 1) {
    const operand1 = randomInteger(1, 15);
    const operand2 = randomInteger(1, 15);

    const question = `${operand1} ${operand2}`;
    const correctAnswer = `${getGcd(operand1, operand2)}`;

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }

  playGame(playerTask, questions, correctAnswers, numberQuestions);
}
