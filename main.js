import {
  palindrome,
  min,
  max,
  maxTernary,
  minTernary,
  renameZero,
  arrayThree,
  randomArray,
  randomArrayNegative,
} from './src/lesson-3.js';
import { sum, sumArrow, text, getColor } from './src/lesson-4.js';

// //--------lesson-2_task-1---------
let user = 'John Doe';

console.log(user);

const student = 'Anna Kvasova';

console.log(student);

user = student;

//Anna Kvasova
console.log(user);

// //--------lesson-2_task-2---------
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

// //--------lesson-2_task-3---------
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

// //--------lesson-3_task-1---------

console.log(palindrome('шалаш')); //------true
console.log(palindrome('шалаши')); //-----false
console.log(palindrome('Шалаш ШалаШ')); //------true; use .toLowerCase() or .toUpperCase()
console.log(palindrome('А роза упала на лапу Азора')); //------true; use .split (splits the string into an array at the separator) and .join (concatenates the elements of an array into a string and returns a string + separates elements)
console.log(palindrome('Миру – мир, Риму – Рим')); //------true; use .replaceAll (punctuation marks) or .replace(/[^a-zа-яё]/gi, '') (removes everything but letters)
console.log(palindrome('Мы доломались! Сила – молодым'));
console.log(palindrome()); //------"no data" || "нет данных" (undefined)
console.log(palindrome(345800)); //------false; use .toString()
console.log(palindrome(345543)); //-----true
console.log(palindrome('345800')); //------false
console.log(palindrome('345543')); //------true

// //--------lesson-3_task-2---------

console.log(min(5, 10));
console.log(min(10, 3));
console.log(min(10, 10));

console.log(max(5, 10));
console.log(max(10, 3));
console.log(max(10, 10));

console.log(minTernary(5, 10));
console.log(minTernary(10, 3));
console.log(minTernary(10, 10));

console.log(maxTernary(5, 10));
console.log(maxTernary(10, 3));
console.log(maxTernary(10, 10));
//
// //--------lesson-3_task-3---------

console.log(arrayThree);
console.log(renameZero(arrayThree));

console.log(randomArray);
console.log(renameZero(randomArray));

console.log(randomArrayNegative);
console.log(renameZero(randomArrayNegative));

//--------lesson-4_task-1---------

console.log(sum(5)(2));
console.log(sumArrow(5)(2));

// //--------lesson-4_task-2---------

for (let i = 0; i < text.length; i += 1) {
  text[i].addEventListener('click', getColor());
}

// //--------lesson-4_task-3---------
