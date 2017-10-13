import { runGame, rnd } from '..';

const rule = 'What is the result of the expression?\n';

const calculate = ([a, b], iteration) => {
  switch (iteration) {
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

const generateTask = (iteration) => {
  const taskData = [rnd(0, 99), rnd(0, 99)];
  const operation = calculate(taskData, iteration)[1];
  const question = `${taskData[0]} ${operation} ${taskData[1]}`;
  const answer = calculate(taskData, iteration)[0];
  return [question, answer];
};


export default () => runGame(rule, generateTask);
