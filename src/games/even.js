import readlineSync from 'readline-sync';

export default function evenGame() {
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const maxCountOfTries = 3;

  const name = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name?: ',
  );

  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let count = 1; count <= maxCountOfTries; count += 1) {
    const randomInt = randomInteger(0, 100);
    console.log(`Question: ${randomInt}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomInt % 2 !== 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (count === maxCountOfTries) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
}
