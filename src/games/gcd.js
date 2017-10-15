import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const countGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return countGcd(b, a % b);
};

const createTask = () => {
  const firstNumber = randomNumberFromRange(0, 99);
  const secondNumber = randomNumberFromRange(0, 99);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = countGcd(firstNumber, secondNumber);
  return [question, String(answer)];
};

export default () => runGame(rule, createTask);
