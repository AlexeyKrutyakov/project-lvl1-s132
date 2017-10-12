import readlineSync from 'readline-sync';

const greeting = (rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const rnd = (max, min) => Math.round((Math.random() * (max - min)) + min);

export default (rule, question, correctAnswer) => {
  const name = greeting(rule);
  const iter = (acc) => {
    const a = rnd(0, 99);
    const b = rnd(0, 99);
    if (acc === 0) {
      return `Congratulations, ${name}!`;
    }
    console.log(question(acc, a, b));
    const answer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(a, b)(acc)[0];
    if (answer === correct) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    return `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
  };
  const attemptsCount = 3;
  return iter(attemptsCount);
};
