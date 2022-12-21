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
  if (typeof string === 'undefined')
    return false;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[string.length - 1 - i])
      return false;
  }
  return true;
};
console.log(palindrome('шалаш')); //------true
console.log(palindrome('шалаши')); //-----false
console.log(palindrome('Шалаш')); //------why false?
console.log(palindrome('ШалаШ')); //------как сделать, чтобы буквы сравнивались вне зависимости от регистра?
console.log(palindrome('А роза упала на лапу Азора')); //------как сделать сравнение выражения (не учитывать пробелы)?
console.log(palindrome()); //------false (undefined)
console.log(palindrome(345800)); //------как сделать, чтобы сравнивались числа или в этом случае такое не предполагается (сравниваться могут только строки)?
console.log(palindrome('345800')); //------false
console.log(palindrome('345543')); //------true

let textPalindrome = 'довод'

console.log(palindrome(textPalindrome)) //------true
console.log(palindrome(textPalindrome + 'ы')) //------false


// на примере 'шалаш' (length = 5; но! ш = 0, а = 1, л = 2, а = 3, ш = 4, т.е. =4):
// for (let i = 0 (i = ш); i < string.length (порядковый номер меньше длины слова); i += 1 (переходим к след.букве) {
//  if (string[i] (буква слова по порядку; i = 0 => i = ш) !== string[string.length - 1 - i] (длина - 1, чтобы соответствовало порядковым номерам (5-1=4) и минус порядковый номер буквы, чтобы сравнить слово в обратном порядке))
// string[i=0] = ш     string[string.length - 1 - i] = ш (5-1-0) порядковый номер = 4
// string[i=1] = а     string[string.length - 1 - i] = а (5-1-1) порядковый номер = 3
// etc.


//--------lesson-3_task-2---------

//--------lesson-3_task-3---------

