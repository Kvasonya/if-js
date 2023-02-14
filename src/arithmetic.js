//-----Multiplication------

const multiplication = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result *= arr[i];
  }
  return result;
};

const multiplicationReduce = (arr) => arr.reduce((acc, item) => acc * item, 1);

//------Min / Max-----

const min = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
};

const max = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

const minTernary = (a, b) => (a < b ? a : b);

const maxTernary = (a, b) => (a > b ? a : b);

const minInArray = (arr) =>
  arr.sort((a, b) => a - b).find((item, index) => index === 0);

const maxInArray = (arr) =>
  arr.sort((a, b) => b - a).find((item, index) => index === 0);

//-----SUM-----

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

const sumArrow = (a) => (b) => a + b;

const sumArray = (arr) => arr.reduce((acc, item) => acc + item);

export {
  multiplication,
  multiplicationReduce,
  max,
  min,
  maxTernary,
  minTernary,
  minInArray,
  maxInArray,
  sum,
  sumArrow,
  sumArray,
};
