import { palindrome, checkPalindrome2 } from '../src/scripts/palindrome.js';

test('is the string a palindrome', () => {
  const isPalindrome = ['шалаш', 'Миру – мир, Риму – Рим', 1001];
  const isNotPalindrome = ['шалаши', 'это не палиндром!', 1010];
  const noData = '  ';

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

test('is the string a palindrome', () => {
  const isPalindrome = ['шалаш', 'Миру – мир, Риму – Рим', 1001];
  const isNotPalindrome = ['шалаши', 'это не палиндром!', 1010];

  // isNotPalindrome.every(function (str) { expect.palindrome2 })

  for (let i = 0; i < isPalindrome.length; i += 1) {
    expect(checkPalindrome2(isPalindrome[i])).toBeTruthy();
  }
  for (let i = 0; i < isPalindrome.length; i += 1) {
    expect(checkPalindrome2(isNotPalindrome[i])).toBeFalsy();
  }
});
