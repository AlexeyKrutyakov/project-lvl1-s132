import runGame from '..';
import rnd from '../utils';

const rule = 'Balance the given number.';

const balanceArr = (n) => {
  const arr = Array.from(String(n)).map(Number);
  const sumArr = arr.reduce((acc, current) => acc + current);
  const iter = (sum, iterationsCount, acc) => {
    if (iterationsCount === 0) {
      return acc;
    }
    const average = sum / iterationsCount;
    const newArrElement = Math.floor(average);
    acc.push(newArrElement);
    return iter(sum - newArrElement, iterationsCount - 1, acc);
  };
  return Number(iter(sumArr, arr.length, []).toString().replace(/,/g, ''));
};

const generateTask = () => {
  const taskNumber = rnd(100, 9999);
  const question = `${taskNumber}`;
  const answer = `${balanceArr(taskNumber)}`;
  return [question, answer];
};

export default () => runGame(rule, generateTask);
