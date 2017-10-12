import runGame from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const question = (num1, num2) => `Question: ${num1} ${num2}`;

const correctAnswer = (num1, num2) => () => {
  const recur = (a, b) => {
    if (b === 0) {
      return `${Math.abs(a)}`;
    }
    return recur(b, a % b);
  };
  return recur(num1, num2);
};

export default() => runGame(rules, question, correctAnswer);
