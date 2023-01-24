//--------lesson-2_task-1---------

let user = 'John Doe';

console.log(user);

const student = 'Anna Kvasova';

console.log(student);

user = student;

//Anna Kvasova
console.log(user);

//--------lesson-2_task-2---------

let test = 1;

test += 1;

//2
console.log(test);

test += '1';

//21
console.log(test);

test -= 1;

//20
console.log(test);

test = true;

//true
console.log(test);

//--------lesson-2_task-3---------

const arrayOne = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arrayOne.length; i += 1) {
  result = result * arrayOne[i];
}
console.log(result);

const multiplication = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result = result * arr[i];
  }
  return result;
};

console.log(multiplication(arrayOne));

const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
    console.log(arrayTwo[i]);
  }
}

for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
    console.log(arrayTwo[i]);
  }
}

for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] !== 0 && arrayTwo[i] % 2 === 0) {
    console.log(arrayTwo[i]);
  }
}
//--------lesson-3_task-1---------

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

console.log(palindrome('шалаш')); //------true

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

console.log(min(5, 10));

console.log(max(5, 10));

console.log(minTernary(5, 10));

console.log(maxTernary(5, 10));

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

console.log(arrayThree);
console.log(renameZero(arrayThree));

console.log(randomArray);
console.log(renameZero(randomArray));

console.log(randomArrayNegative);
console.log(renameZero(randomArrayNegative));

//--------lesson-4_task-1---------

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

const sumArrow = (a) => (b) => a + b;

console.log(sum(5)(2));
console.log(sumArrow(5)(2));

//--------lesson-4_task-2---------

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text = document.querySelectorAll('#text1, #text2, #text3');

const getColor = function () {
  let i = 0;
  return function selectColor(event) {
    event.target.style.color = colors[i];
    event.target.classList.remove('text_no-active');
    event.target.classList.add('text_active');
    i += 1;
    if (i === colors.length) {
      i = 0;
    }
  };
};

for (let i = 0; i < text.length; i += 1) {
  text[i].addEventListener('click', getColor());
}

//--------lesson-4_task-3---------

//in the directory tests

//--------lesson-5_task-1---------
