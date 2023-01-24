import {
  multiplication,
  palindrome,
  min,
  max,
  maxTernary,
  minTernary,
  renameZero,
} from '../src/modules.js';

test('array data multiplication result', () => {
  expect(multiplication([1, 2, 3, 4, 5])).toBe(120);
});

test('is the string a palindrome', () => {
  const isPalindrome = ['шалаш', 'Миру – мир, Риму – Рим', 1001];
  const isNotPalindrome = ['шалаши', 'это не палиндром!', 1010];
  const noData = undefined;

  for (let i = 0; i < isPalindrome.length; i += 1) {
    expect(palindrome(isPalindrome[i])).toBe(
      `${isPalindrome[i]} - It's a palindrome`,
    );
  }
  for (let i = 0; i < isPalindrome.length; i += 1) {
    expect(palindrome(isNotPalindrome[i])).toBe(
      `${isNotPalindrome[i]} - It's not a palindrome`,
    );
  }
  expect(palindrome(noData)).toBe('No data');
});

test('find the smallest number', () => {
  expect(min(5, 3)).toBe(3);
  expect(minTernary(5, 3)).toBe(3);
});

test('find the largest number', () => {
  expect(max(5, 3)).toBe(5);
  expect(maxTernary(5, 3)).toBe(5);
});

test('rename number 0 to word zero', () => {
  const arrayTest = [10, 22, 70, 100, -10, 40, 15, 607];
  expect(renameZero(arrayTest)).toStrictEqual([
    '1zero',
    22,
    '7zero',
    '1zerozero',
    '-1zero',
    '4zero',
    15,
    '6zero7',
  ]);
});
