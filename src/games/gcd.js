import runGame from '..';
import rnd from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const countGcd = (a, b) => {
  const recur = (n, m) => {
    if (m === 0) {
      return [`${Math.abs(n)}`];
    }
    return recur(m, n % m);
  };
  return recur(a, b);
};

const generateTask = () => {
  const taskData = [rnd(0, 99), rnd(0, 99)];
  const question = `${taskData[0]} ${taskData[1]}`;
  const answer = `${countGcd(taskData[0], taskData[1])}`;
  return [question, answer];
};

export default () => runGame(rule, generateTask);
