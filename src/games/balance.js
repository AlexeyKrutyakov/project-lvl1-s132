import runGame from '..';

const deleteZerosFrom = (arr) => {
  const result = [];
  arr.forEach((element) => {
    if (element !== 0) {
      result.push(element);
    }
  });
  return result;
};

const arrToString = (arr) => {
  let result = '';
  arr.forEach((element) => {
    result += element;
  });
  return result;
};

const sumArr = arr => arr.reduce((acc, currentValue) => acc + currentValue);

const balanceArr = (arr) => {
  const result = [];
  const iter = (sum, iterationsCount, acc) => {
    if (iterationsCount === 0) {
      return acc;
    }
    const average = sum / iterationsCount;
    const newArrElement = Math.floor(average);
    acc.push(newArrElement);
    return iter(sum - newArrElement, iterationsCount - 1, acc);
  };
  return iter(sumArr(arr), arr.length, result);
};

const rules = 'Balance the given number.\n';

const question = (iteration, num1, num2, num3, num4) => {
  const numArray = [num1, num2, num3, num4];
  const text = arrToString(deleteZerosFrom(numArray));
  return `Question: ${text}`;
};

const correctAnswer = (num1, num2, num3, num4) => () => {
  const workArray = deleteZerosFrom([num1, num2, num3, num4]);
  return arrToString(balanceArr(workArray));
};

export default() => runGame(rules, question, correctAnswer);
