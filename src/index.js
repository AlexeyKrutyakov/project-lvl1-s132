import readlineSync from 'readline-sync';

const attemptsCount = 3;

export default (rule, createTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  console.log();

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();

  const iter = (attempt = 1) => {
    if (attempt > attemptsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const currentTask = createTask();
    const question = currentTask[0];
    const correct = currentTask[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
      iter(attempt + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  };
  return iter();
};
