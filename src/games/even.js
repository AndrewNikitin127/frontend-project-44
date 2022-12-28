import { randomInteger, playGame } from '../index.js';

export default function evenGame() {
  const playerTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];

  for (let count = 0; count < 3; count += 1) {
    const questionNum = randomInteger(1, 100);
    const correctAnswer = questionNum % 2 === 0 ? 'yes' : 'no';

    questions.push(`${questionNum}`);
    correctAnswers.push(correctAnswer);
  }
  playGame(playerTask, questions, correctAnswers);
}
