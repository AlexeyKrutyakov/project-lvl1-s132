import runGame from '..';

const rule = 'What is the result of the expression?\n';

const correctAnswer = (a, b) => (iteration) => {
  switch (iteration) {
    case 3:
      return [`${a + b}`, '+'];
    case 2:
      return [`${a - b}`, '-'];
    default:
      return [`${a * b}`, '*'];
  }
};

const question = (iteration, a, b) => `Question: ${a} ${correctAnswer(a, b)(iteration)[1]} ${b}`;

export default () => runGame(rule, question, correctAnswer);
