import runGame from '..';
import rnd from '../utils';

const rule = 'What is the result of the expression?';

const createQuestionAndAnswer = (a, b) => {
  switch (rnd(1, 3)) {
    case 3:
      return [`${a} + ${b}`, `${a + b}`];
    case 2:
      return [`${a} - ${b}`, `${a - b}`];
    default:
      return [`${a} * ${b}`, `${a * b}`];
  }
};

const createTask = () => {
  const a = rnd(0, 99);
  const b = rnd(0, 99);
  return createQuestionAndAnswer(a, b);
};

export default () => runGame(rule, createTask);
