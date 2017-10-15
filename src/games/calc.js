import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'What is the result of the expression?';

const createQuestionAndAnswer = (a, b) => {
  switch (randomNumberFromRange(1, 3)) {
    case 1:
      return [`${a} + ${b}`, `${a + b}`];
    case 2:
      return [`${a} - ${b}`, `${a - b}`];
    default:
      return [`${a} * ${b}`, `${a * b}`];
  }
};

const createTask = () => {
  const firstNumber = randomNumberFromRange(0, 99);
  const secondNumber = randomNumberFromRange(0, 99);
  return createQuestionAndAnswer(firstNumber, secondNumber);
};

export default () => runGame(rule, createTask);
