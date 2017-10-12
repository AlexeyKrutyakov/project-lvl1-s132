import readlineSync from 'readline-sync';

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const rnd = multiplier => Math.round(Math.random() * multiplier);

export default (gameRules, questionForUser, correctAnswer) => {
  const userName = greeting(gameRules);
  const iter = (acc) => {
    const num1 = rnd(9);
    const num2 = rnd(9);
    const num3 = rnd(9);
    const num4 = rnd(9);

    if (acc === 0) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }
    console.log(questionForUser(acc, num1, num2, num3, num4));
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(num1, num2, num3, num4)(acc);
    if (userAnswer === correct) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
    return null;
  };
  const attemptsCount = 3;
  return iter(attemptsCount);
};
