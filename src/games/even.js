import runGame from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = n => (n % 2 === 0);

const question = (iteration, n) => `Question: ${n}`;

const correctAnswer = n => () => [(isEven(n) ? 'yes' : 'no')];

export default () => runGame(rule, question, correctAnswer);
