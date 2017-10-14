import runGame from '..';
import rnd from '../utils';

const rule = 'Balance the given number.';

const balanceTheNumber = (n) => {
  const arr = Array.from(String(n)).map(Number);
  const sumElements = arr.reduce((acc, element) => acc + element);

  const iter = (sum, elements, acc) => {
    if (elements === 0) {
      return acc;
    }
    const average = sum / elements;
    const newElement = Math.floor(average);
    return iter(sum - newElement, elements - 1, acc.concat(newElement));
  };

  return Number(iter(sumElements, arr.length, []).toString().replace(/,/g, ''));
};

const createTask = () => {
  const n = rnd(100, 9999);
  const question = `${n}`;
  const answer = `${balanceTheNumber(n)}`;
  return [question, answer];
};

export default () => runGame(rule, createTask);
