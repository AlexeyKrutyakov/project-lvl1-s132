import runGame from '..';
import randomNumberFromRange from '../utils';

const rule = 'What number is missing in this progression?';

const createQuestionAndAnswer = (firstElement) => {
  const rangeOfChange = randomNumberFromRange(1, 9);
  let result = [firstElement];
  const progressionLength = 10;
  for (let i = 1; i < progressionLength; i += 1) {
    result = result.concat(result[result.length - 1] + rangeOfChange);
  }
  const missedIndex = randomNumberFromRange(0, 9);
  const missedElement = result[missedIndex];
  result[missedIndex] = '..';
  return [result.join(' '), `${missedElement}`];
};

const createTask = () => {
  const startNumber = randomNumberFromRange(1, 99);
  return createQuestionAndAnswer(startNumber);
};

export default () => runGame(rule, createTask);
