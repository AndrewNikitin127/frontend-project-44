import { randomInteger, playGame } from '../index.js';

function testPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

export default function primeGame() {
  const playerTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const question = randomInteger(2, 100);
    const correctAnswer = testPrime(question) ? 'yes' : 'no';

    questions.push(`${question}`);
    correctAnswers.push(correctAnswer);
  }

  playGame(playerTask, questions, correctAnswers);
}
