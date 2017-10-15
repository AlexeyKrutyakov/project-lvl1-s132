export default (maxNumber, minNumber) => {
  const rangeOfNumbers = maxNumber - minNumber;
  const result = (Math.random() * rangeOfNumbers) + minNumber;
  return Math.round(result);
};
