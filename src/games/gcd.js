import { randomInteger, playGame } from '../index.js';

function gcd(val1, val2) {
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

  for (let count = 0; count < 3; count += 1) {
    const operand1 = randomInteger(1, 15);
    const operand2 = randomInteger(1, 15);

    questions.push(`${operand1} ${operand2}`);
    correctAnswers.push(`${gcd(operand1, operand2)}`);
  }

  playGame(playerTask, questions, correctAnswers);
}
