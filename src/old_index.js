import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const correctAnswer = number => ((number % 2 === 0) ? 'yes' : 'no');

const evenTestResult = (name, attempts) => {
  if (attempts === 0) {
    return `Congratulations, ${name}!`;
  }
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correct = correctAnswer(number);
  if (userAnswer === correct) {
    console.log('Correct!');
    return evenTestResult(name, attempts - 1);
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
};

export const even = () => {
  const userName = greeting();
  const attempts = 3;
  console.log(evenTestResult(userName, attempts));
};

export const calc = () => {};
