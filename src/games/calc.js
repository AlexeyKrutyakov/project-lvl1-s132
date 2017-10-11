import readlineSync from 'readline-sync';

const correctAnswer = (num1, num2, operationNum) => {
  switch (operationNum) {
    case 3:
      return [num1 + num2, '+'];
    case 2:
      return [num1 - num2, '-'];
    case 1:
      return [num1 * num2, '*'];
    default:
      return null;
  }
};
const randomNumber = () => Math.round(Math.random() * 100);

export default (name) => {
  const iter = (acc) => {
    if (acc === 0) {
      return `Congratulations, ${name}!`;
    }
    const num1 = randomNumber();
    const num2 = randomNumber();
    const operation = correctAnswer(num1, num2, acc)[1];
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(num1, num2, acc)[0];
    //  eslint-disable-next-line
    if (!isNaN(Number(userAnswer)) && Number(userAnswer) === correct) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
  };
  return iter(3);
};
