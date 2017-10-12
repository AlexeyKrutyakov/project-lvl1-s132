import runGame from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = testingNumber => (testingNumber % 2 === 0);

const question = n => `Question: ${n}`;

const correctAnswer = n => () => (isEven(n) ? 'yes' : 'no');

export default () => runGame(rules, question, correctAnswer);
