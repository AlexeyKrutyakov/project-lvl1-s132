import { runGame, rnd } from '..';

const rule = 'Balance the given number.\n';

const sumElements = arr => arr.reduce((acc, current) => acc + current);

const arrToString = (arr) => {
  let result = '';
  arr.forEach((element) => {
    result += element;
  });
  return result;
};

const balanceArr = (elements) => {
  const arr = [];
  elements.forEach(n => arr.push(Number(n)));

  const iter = (sum, elementsCount, acc) => {
    if (elementsCount === 0) {
      return acc;
    }
    const average = sum / elementsCount;
    const newArrElement = Math.floor(average);
    acc.push(newArrElement);
    return iter(sum - newArrElement, elementsCount - 1, acc);
  };
  return iter(sumElements(arr), arr.length, []);
};


const generateTask = () => {
  const taskData = [rnd(0, 9), rnd(0, 9), rnd(0, 9), rnd(0, 9)];
  const question = `${taskData[0]}${taskData[1]}${taskData[2]}${taskData[3]}`;
  const answer = arrToString(balanceArr(taskData));
  return [question, answer];
};

export default () => runGame(rule, generateTask);
