import runGame from '..';
import rnd from '../utils';

const rule = 'What is the result of the expression?';

const createTaskData = (a, b) => {
  switch (rnd(1, 3)) {
    case 3:
      return [a + b, '+'];
    case 2:
      return [a - b, '-'];
    default:
      return [a * b, '*'];
  }
};

const generateTask = () => {
  const a = rnd(0, 99);
  const b = rnd(0, 99);
  const taskData = createTaskData(a, b);
  const operation = taskData[1];
  const question = `${a} ${operation} ${b}`;
  const answer = `${taskData[0]}`;
  return [question, answer];
};

export default () => runGame(rule, generateTask);
