import { runGame, rnd } from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = n => (n % 2 === 0);

const generateTask = () => {
  const question = rnd(0, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(rule, generateTask);
