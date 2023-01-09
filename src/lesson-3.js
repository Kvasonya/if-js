export {
  palindrome,
  min,
  max,
  minTernary,
  maxTernary,
  renameZero,
  arrayThree,
  generateArray,
  randomArray,
  generateArrayNegative,
  randomArrayNegative,
};

//--------lesson-3_task-1---------
const palindrome = function (string) {
  if (typeof string === 'undefined') {
    return 'No data';
  } else {
    string = string
      .toString()
      .toLowerCase()
      .split(' ')
      .join('')
      .replace(/[^a-zа-яё]/gi, '');
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] !== string[string.length - 1 - i]) {
        return "It's not a palindrome";
      }
    }
  }
  return "It's a palindrome";
};

//--------lesson-3_task-2---------
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

const minTernary = function (a, b) {
  //------const minTernary = (a, b) => (a < b ? a : b);
  return +(a < b ? a : b);
};

const maxTernary = function (a, b) {
  //------const maxTernary = (a, b) => (a > b ? a : b);
  return +(a > b ? a : b);
};

//--------lesson-3_task-3---------
const arrayThree = [10, 22, 42, 70, 100, 11, 40, 67, 8, 99];

const renameZero = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].toString().replaceAll('0', 'zero');
    if (!arr[i].includes('zero')) {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
};

const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const generateArrayNegative = (length, min, max) =>
  [...new Array(length)].map(() =>
    Math.round(Math.random() * (max - min) + min),
  );

const randomArray = generateArray(10, 100);

const randomArrayNegative = generateArrayNegative(12, -100, 1000);
