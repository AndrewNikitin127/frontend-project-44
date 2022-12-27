/* eslint-disable no-unused-expressions */
import {
  randomInteger, getPlayerName, raiseQuestion, getPlayerAnswer, compareAnswers,
} from './index.js';

export default function calculatorGame() {
  const name = getPlayerName();
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  const maxCountOfTries = 3;

  for (let count = 1; count <= maxCountOfTries; count += 1) {
    const operand1 = randomInteger(0, 15);
    const operand2 = randomInteger(0, 15);
    const operator = operators[randomInteger(0, 2)];

    let correctAnswer = 0;

    switch (operator) {
      case '+': correctAnswer = `${operand1 + operand2}`; break;
      case '-': correctAnswer = `${operand1 - operand2}`; break;
      case '*': correctAnswer = `${operand1 * operand2}`; break;
      default: break;
    }
    const question = `${operand1} ${operator} ${operand2}`;

    raiseQuestion(question);
    const answer = getPlayerAnswer();

    if (compareAnswers(answer, correctAnswer)) {
      console.log('Correct!');
      count === maxCountOfTries ? console.log(`Congratulations, ${name}!`) : '';
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
}
