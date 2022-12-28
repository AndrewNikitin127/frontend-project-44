import { randomInteger, playGame } from '../index.js';

export default function calculatorGame() {
  const playerTask = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const questions = [];
  const correctAnswers = [];

  for (let count = 0; count < 3; count += 1) {
    const operand1 = randomInteger(0, 15);
    const operand2 = randomInteger(0, 15);
    const operator = operators[randomInteger(0, 2)];

    switch (operator) {
      case '+': correctAnswers.push(`${operand1 + operand2}`); break;
      case '-': correctAnswers.push(`${operand1 - operand2}`); break;
      case '*': correctAnswers.push(`${operand1 * operand2}`); break;
      default: break;
    }
    questions.push(`${operand1} ${operator} ${operand2}`);
  }
  playGame(playerTask, questions, correctAnswers);
}
