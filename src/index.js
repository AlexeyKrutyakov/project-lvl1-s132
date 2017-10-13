import readlineSync from 'readline-sync';

export default (rule, task, attemptsCount) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (attempt = 1) => {
    if (attempt > attemptsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const currentTask = task();
    const question = currentTask[0];
    const correct = currentTask[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
      iter(attempt + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
  };
  return iter();
};
