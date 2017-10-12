import readlineSync from 'readline-sync';

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const randomNumber = () => Math.round(Math.random() * 100);

export default (gameRules, questionForUser, correctAnswer) => {
  const userName = greeting(gameRules);
  const iter = (acc) => {
    const num1 = randomNumber();
    const num2 = randomNumber();

    if (acc === 0) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }
    console.log(questionForUser(num1, num2, acc));
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(num1, num2)(acc);
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
