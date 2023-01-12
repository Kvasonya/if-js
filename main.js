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

//--------lesson-3_task-2---------

console.log(min(5, 10));

console.log(max(5, 10));

console.log(minTernary(5, 10));

console.log(maxTernary(5, 10));

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
