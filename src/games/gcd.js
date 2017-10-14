import runGame from '..';
import rnd from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const countGcd = (n, m) => {
  if (m === 0) {
    return [`${Math.abs(n)}`];
  }
  return countGcd(m, n % m);
};

const createTask = () => {
  const a = rnd(0, 99);
  const b = rnd(0, 99);
  const question = `${a} ${b}`;
  const answer = `${countGcd(a, b)}`;
  return [question, answer];
};

export default () => runGame(rule, createTask);
