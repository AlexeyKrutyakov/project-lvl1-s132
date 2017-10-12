import runGame from '..';

const sumArr = arr => arr.reduce((acc, current) => acc + current);

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
  return iter(sumArr(arr), arr.length, []);
};

const rule = 'Balance the given number.\n';

const question = (iteration, a, b) => `Question: ${a}${b}`;

const correctAnswer = (a, b) => () => {
  const arr = Array.from(`${a}${b}`);
  return [arrToString(balanceArr(arr))];
};

export default() => runGame(rule, question, correctAnswer);
