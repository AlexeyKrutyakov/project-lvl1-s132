import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  const halfNum = num / 2;
  if (num < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor > halfNum) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const createTask = () => {
  const question = randomNumberFromRange(0, 99);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(rule, createTask);
