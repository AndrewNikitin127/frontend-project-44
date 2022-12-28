/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const playGame = (playerTask, questions, correctAnswers) => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log(playerTask);

  for (let count = 0; count < 3; count += 1) {
    console.log(`Question: ${questions[count]} `);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswers[count]) {
      console.log('Correct!');
      count === 2 ? console.log(`Congratulations, ${playerName}!`) : '';
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[count]}'`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
};

export { randomInteger, playGame };
