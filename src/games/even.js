import runGame from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = testingNumber => (testingNumber % 2 === 0);

const combine = (a, b) => (a * 10) + b;

const question = (iteration, num1, num2) => `Question: ${combine(num1, num2)}`;

const correctAnswer = (num1, num2) => () => (isEven(combine(num1, num2)) ? 'yes' : 'no');

export default () => runGame(rules, question, correctAnswer);
