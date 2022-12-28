import { randomInteger, playGame } from '../index.js';

export default function progressionGame() {
  const playerTask = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const questionArr = [];
    const firstElem = randomInteger(0, 100);
    const progressionStep = randomInteger(1, 5);
    questionArr.push(`${firstElem}`);

    for (let j = 1; j < 10; j += 1) {
      questionArr.push(`${firstElem + progressionStep * j}`);
    }

    correctAnswers.push(...questionArr.splice(randomInteger(0, 9), 1, '..'));
    questions.push(questionArr.join(' '));
  }
  playGame(playerTask, questions, correctAnswers);
}
