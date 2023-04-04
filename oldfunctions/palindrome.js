export const palindrome = (str) => {
  const checkedStr = str;

  if (str.length < 1 || str.toString().trim() === '') {
    return 'No data';
  } else {
    str = str
      .toString()
      .toLowerCase()
      .split(' ')
      .join('')
      .replace(/[^a-zа-яё0-9]/gi, '');
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] !== str[str.length - 1 - i]) {
        return `${checkedStr} - It's not a palindrome`;
      }
    }
  }
  return `${checkedStr} - It's a palindrome`;
};

export const checkPalindrome2 = (str) => {
  str = str
    .toString()
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]/gi, '');
  return str === str.split('').reverse().join('');
};
