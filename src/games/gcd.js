import runGame from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const question = (iteration, a, b) => `Question: ${a} ${b}`;

const correctAnswer = (a, b) => () => {
  const recur = (n, m) => {
    if (m === 0) {
      return [`${Math.abs(n)}`];
    }
    return recur(m, n % m);
  };
  return recur(a, b);
};

export default() => runGame(rules, question, correctAnswer);
