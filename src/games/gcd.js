import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const countGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return countGcd(num2, num1 % num2);
};

const createTask = () => {
  const number1 = randomNumberFromRange(0, 99);
  const number2 = randomNumberFromRange(0, 99);
  const question = `${number1} ${number2}`;
  const answer = `${countGcd(number1, number2)}`;
  return [question, answer];
};

export default () => runGame(rule, createTask);
