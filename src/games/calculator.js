import { randomInteger, playGame } from '../index.js';

export default function calculatorGame() {
  const playerTask = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const questions = [];
  const correctAnswers = [];
  const numberQuestions = 3;

  for (let i = 0; i < numberQuestions; i += 1) {
    const operand1 = randomInteger(0, 15);
    const operand2 = randomInteger(0, 15);
    const operator = operators[randomInteger(0, 2)];

    const question = `${operand1} ${operator} ${operand2}`;
    let correctAnswer = '';

    switch (operator) {
      case '+': correctAnswer = (`${operand1 + operand2}`); break;
      case '-': correctAnswer = (`${operand1 - operand2}`); break;
      case '*': correctAnswer = (`${operand1 * operand2}`); break;
      default: break;
    }
    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  playGame(playerTask, questions, correctAnswers, numberQuestions);
}
