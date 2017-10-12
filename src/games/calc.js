import runGame from '..';

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

const question = (num1, num2, iteration) => `Question: ${num1} ${operation(iteration)} ${num2}`;

const correctAnswer = (a, b) => (iteration) => {
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
