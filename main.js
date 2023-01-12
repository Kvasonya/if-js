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

//--------lesson-3_task-1---------

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

//--------lesson-3_task-2---------

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

//--------lesson-3_task-3---------

console.log(arrayThree);
console.log(renameZero(arrayThree));

console.log(randomArray);
console.log(renameZero(randomArray));

console.log(randomArrayNegative);
console.log(renameZero(randomArrayNegative));

//--------lesson-4_task-1---------

console.log(sum(5)(2));
console.log(sumArrow(5)(2));

//--------lesson-4_task-2---------

for (let i = 0; i < text.length; i += 1) {
  text[i].addEventListener('click', getColor());
}

//--------lesson-4_task-3---------
