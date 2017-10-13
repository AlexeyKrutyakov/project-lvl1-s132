import readlineSync from 'readline-sync';

export const rnd = (max, min) => Math.round((Math.random() * (max - min)) + min);

export const runGame = (rule, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);


  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const currentTask = task(acc);
    const question = currentTask[0];
    const correct = currentTask[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
    return false;
  };


  const attemptsCount = 3;
  return iter(attemptsCount);
};
