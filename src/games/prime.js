import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (theNumber) => {
  if (theNumber < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (theNumber / 2 < divisor) {
      return true;
    }
    if (theNumber % divisor === 0) {
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
