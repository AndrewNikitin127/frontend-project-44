/* eslint-disable no-constant-condition */
import { randomInteger, playGame } from '../index.js';

function gcd(val1, val2) {
  let a = Math.abs(val1);
  let b = Math.abs(val2);

  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
}

export default function gcdGame() {
  const playerTask = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswers = [];

  for (let count = 0; count < 3; count += 1) {
    const operand1 = randomInteger(0, 15);
    const operand2 = randomInteger(0, 15);

    questions.push(`${operand1} ${operand2}`);
    correctAnswers.push(`${gcd(operand1, operand2)}`);
  }

  playGame(playerTask, questions, correctAnswers);
}
