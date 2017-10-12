import runGame from '..';

const combine = (a, b) => (a * 10) + b;

const rules = 'Find the greatest common divisor of given numbers.\n';

const question = (iteration, num1, num2, num3, num4) => {
  const firstNumber = combine(num1, num2);
  const secondNumber = combine(num3, num4);
  return `Question: ${firstNumber} ${secondNumber}`;
};

const correctAnswer = (num1, num2, num3, num4) => () => {
  const firstNumber = combine(num1, num2);
  const secondNumber = combine(num3, num4);
  const recur = (a, b) => {
    if (b === 0) {
      return `${Math.abs(a)}`;
    }
    return recur(b, a % b);
  };
  return recur(firstNumber, secondNumber);
};

export default() => runGame(rules, question, correctAnswer);
