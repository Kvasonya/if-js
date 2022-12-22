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

const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3];

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
  if (typeof string === 'undefined') {
    return 'No data';
  } else {
    string = string
      .toString()
      .toLowerCase()
      .split(' ')
      .join('')
      .replaceAll(',' && '–', '');
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] !== string[string.length - 1 - i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(palindrome('шалаш')); //------true
console.log(palindrome('шалаши')); //-----false
console.log(palindrome('Шалаш ШалаШ')); //------true; use .toLowerCase() or .toUpperCase()
console.log(palindrome('А роза упала на лапу Азора')); //------true; use .split (splits the string into an array at the separator) and .join (concatenates the elements of an array into a string and returns a string + separates elements)
console.log(palindrome('Миру – мир, Риму – Рим')); //------true; use .replaceAll (punctuation marks) ???
console.log(palindrome()); //------"no data" || "нет данных" (undefined)
console.log(palindrome(345800)); //------false; use .toString()
console.log(palindrome(345543)); //-----true
console.log(palindrome('345800')); //------false
console.log(palindrome('345543')); //------true

let textPalindrome = 'довод';

console.log(palindrome(textPalindrome)); //------true
console.log(palindrome(textPalindrome + 'ы')); //------false

textPalindrome = 'рандомное значение';

// на примере 'шалаш' (length = 5; но! ш = 0, а = 1, л = 2, а = 3, ш = 4, т.е. =4):
// for (let i = 0 (i = ш); i < string.length (порядковый номер меньше длины слова); i += 1 (переходим к след.букве) {
//  if (string[i] (буква слова по порядку; i = 0 => i = ш) !== string[string.length - 1 - i] (длина - 1, чтобы соответствовало порядковым номерам (5-1=4) и минус порядковый номер буквы, чтобы сравнить слово в обратном порядке))
// string[i=0] = ш     string[string.length - 1 - i] = ш (5-1-0) порядковый номер = 4
// string[i=1] = а     string[string.length - 1 - i] = а (5-1-1) порядковый номер = 3
// etc.

//--------lesson-3_task-2---------
const min = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
};

console.log(min(5, 10));
console.log(min(10, 3));
console.log(min(10, 10));

const max = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

console.log(max(5, 10));
console.log(max(10, 3));
console.log(max(10, 10));

const minTernary = function (a, b) {
  return +(a < b ? a : b);
};

console.log(minTernary(5, 10));
console.log(minTernary(10, 3));
console.log(minTernary(10, 10));

const maxTernary = function (a, b) {
  return +(a > b ? a : b);
};

console.log(maxTernary(5, 10));
console.log(maxTernary(10, 3));
console.log(maxTernary(10, 10));

//--------lesson-3_task-3---------
const arrayThree = [10, 22, 42, 70, 100, 11, 40, 67, 8, 99];

const renameZero = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].toString().replaceAll('0', 'zero');
  }
  return arr;
};

console.log(arrayThree);
console.log(renameZero(arrayThree));

const arrayTest = [-10, 2, 220, 4, 450, 6, -100, 1000];
console.log(arrayTest);
console.log(renameZero(arrayTest));
