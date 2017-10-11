import readlineSync from 'readline-sync';
// import testResult from './games/calc';
import testResult from './games/calc';

const greeting = () => {
//  console.log('Answer "yes" if number even otherwise answer "no".\n');
  console.log('What is the result of the expression?\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default () => {
  const userName = greeting();
  console.log(testResult(userName));
};
