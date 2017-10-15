import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'What is the result of the expression?';

const createQuestionAndAnswer = (number1, number2) => {
  switch (randomNumberFromRange(1, 3)) {
    case 1:
      return [`${number1} + ${number2}`, `${number1 + number2}`];
    case 2:
      return [`${number1} - ${number2}`, `${number1 - number2}`];
    default:
      return [`${number1} * ${number2}`, `${number1 * number2}`];
  }
};

const createTask = () => {
  const num1 = randomNumberFromRange(0, 99);
  const num2 = randomNumberFromRange(0, 99);
  return createQuestionAndAnswer(num1, num2);
};

export default () => runGame(rule, createTask);
