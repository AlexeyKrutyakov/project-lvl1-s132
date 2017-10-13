import { runGame, rnd } from '..';

const rule = 'What is the result of the expression?\n';

const countExpression = ([a, b, casePosition]) => {
  switch (casePosition) {
    case 3:
      return [`${a + b}`, '+'];
    case 2:
      return [`${a - b}`, '-'];
    case 1:
      return [`${a * b}`, '*'];
    default:
      return false;
  }
};

const generateTask = () => {
  const taskData = [rnd(0, 99), rnd(0, 99), rnd(1, 3)];
  const operation = countExpression(taskData)[1];
  const question = `${taskData[0]} ${operation} ${taskData[1]}`;
  const answer = countExpression(taskData)[0];
  return [question, answer];
};

export default () => runGame(rule, generateTask);
