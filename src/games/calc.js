import runGame from '..';

const combine = (a, b) => (a * 10) + b;

const rules = 'What is the result of the expression?\n';

const operation = (iteration) => {
  switch (iteration) {
    case 3:
      return '+';
    case 2:
      return '-';
    case 1:
      return '*';
    default:
      return null;
  }
};

const question = (iteration, num1, num2, num3, num4) => {
  const firstNumber = combine(num1, num2);
  const secondNumber = combine(num3, num4);
  return `Question: ${firstNumber} ${operation(iteration)} ${secondNumber}`;
};

const correctAnswer = (num1, num2, num3, num4) => (iteration) => {
  const a = combine(num1, num2);
  const b = combine(num3, num4);
  switch (iteration) {
    case 3:
      return `${a + b}`;
    case 2:
      return `${a - b}`;
    case 1:
      return `${a * b}`;
    default:
      return null;
  }
};

export default () => runGame(rules, question, correctAnswer);
