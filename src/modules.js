//--------lesson-3_task-1---------
const multiplication = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result = result * arr[i];
  }
  return result;
};

const palindrome = function (string) {
  const checkedStr = string;

  if (typeof string === 'undefined') {
    return 'No data';
  } else {
    string = string
      .toString()
      .toLowerCase()
      .split(' ')
      .join('')
      .replace(/[^a-zа-яё0-9]/gi, '');
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] !== string[string.length - 1 - i]) {
        return `${checkedStr} - It's not a palindrome`;
      }
    }
  }
  return `${checkedStr} - It's a palindrome`;
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

const renameZero = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].toString().replaceAll('0', 'zero');
    if (!arr[i].includes('zero')) {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
};

export {
  multiplication,
  palindrome,
  min,
  max,
  minTernary,
  maxTernary,
  renameZero,
};
