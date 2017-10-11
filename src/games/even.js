import readlineSync from 'readline-sync';

const correctAnswer = number => ((number % 2 === 0) ? 'yes' : 'no');

export default (name) => {
  const iter = (acc) => {
    if (acc === 0) {
      return `Congratulations, ${name}!`;
    }
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(number);
    if (userAnswer === correct) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`;
  };
  return iter(3);
};
