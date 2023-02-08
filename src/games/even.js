import { randomInteger, playGame } from '../index.js';

export default function evenGame() {
  const playerTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];
  const numberQuestions = 3;

  for (let i = 0; i < numberQuestions; i += 1) {
    const randomInt = randomInteger(1, 100);

    const question = randomInt.toString();
    const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';

    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  playGame(playerTask, questions, correctAnswers, numberQuestions);
}
