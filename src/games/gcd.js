import readlineSync from 'readline-sync';

const correctAnswer = (num1, num2) => {
  const recur = (a, b) => {
    if (b === 0) {
      return Math.abs(a);
    }
    return recur(b, a % b);
  };
  return recur(num1, num2);
};

const randomNumber = () => Math.round(Math.random() * 10);

export default (name) => {
  const iter = (acc) => {
    if (acc === 0) {
      return `Congratulations, ${name}!`;
    }
    const numD = randomNumber();
    const num1 = numD * randomNumber();
    const num2 = numD * randomNumber();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(num1, num2);
    //  eslint-disable-next-line
    if (!isNaN(Number(userAnswer)) && Number(userAnswer) === correct) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
  };
  return iter(3);
};
