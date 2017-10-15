import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const createTask = () => {
  const question = randomNumberFromRange(0, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(rule, createTask);
