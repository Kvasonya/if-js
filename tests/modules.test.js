import {
  // multiplication,
  // palindrome,
  // min,
  // max,
  // maxTernary,
  // minTernary,
  // renameZero,
  // sum,
  getNewDateFormatOne,
  getNewDateFormatTwo,
  newDateFormatReplacer,
  searchPlace,
} from '../src/modules.js';

// //lesson-2 tests
//
// test('array data multiplication result', () => {
//   expect(multiplication([1, 2, 3, 4, 5])).toBe(120);
// });
//
// //lesson-3 tests
//
// test('is the string a palindrome', () => {
//   const isPalindrome = ['шалаш', 'Миру – мир, Риму – Рим', 1001];
//   const isNotPalindrome = ['шалаши', 'это не палиндром!', 1010];
//   const noData = undefined;
//
//   for (let i = 0; i < isPalindrome.length; i += 1) {
//     expect(palindrome(isPalindrome[i])).toBe(
//       `${isPalindrome[i]} - It's a palindrome`,
//     );
//   }
//   for (let i = 0; i < isPalindrome.length; i += 1) {
//     expect(palindrome(isNotPalindrome[i])).toBe(
//       `${isNotPalindrome[i]} - It's not a palindrome`,
//     );
//   }
//   expect(palindrome(noData)).toBe('No data');
// });
//
// test('find the smallest number', () => {
//   expect(min(5, 3)).toBe(3);
//   expect(minTernary(5, 3)).toBe(3);
// });
//
// test('find the largest number', () => {
//   expect(max(5, 3)).toBe(5);
//   expect(maxTernary(5, 3)).toBe(5);
// });
//
// test('rename number 0 to word zero', () => {
//   const arrayTest = [10, 22, 70, 100, -10, 40, 15, 607];
//   expect(renameZero(arrayTest)).toStrictEqual([
//     '1zero',
//     22,
//     '7zero',
//     '1zerozero',
//     '-1zero',
//     '4zero',
//     15,
//     '6zero7',
//   ]);
// });
//
// //lesson-4 tests
//
// test('find the sum of two numbers', () => {
//   expect(sum(10)(5)).toBe(15);
// });

//lesson-5 tests

test('make a new date format (Y-M-D -> D.M.Y)', () => {
  expect(getNewDateFormatOne('2023-01-25')).toBe('25.01.2023');
  expect(getNewDateFormatTwo('2023-01-25')).toBe('25.01.2023');
});

test('make a new date format by using replacer (Y-M-D -> D.M.Y)', () => {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  expect(newDateFormatReplacer(regExp, '2023', '01', '25')).toBe('25.01.2023');
});

test('find all locations by search query', () => {
  const queryBerlin = ['Berlin', 'berlin', ' BErlin  '];
  const queryEmpty = ' ';

  for (let i = 0; i < queryBerlin.length; i += 1) {
    expect(searchPlace(queryBerlin[i])).toStrictEqual([
      'Germany, Berlin, Hostel Friendship',
      'Germany, Berlin, Hotel Rehberge Berlin Mitte',
    ]);
  }
  expect(searchPlace(queryEmpty)).toBe('Please, enter your query :)');
});
