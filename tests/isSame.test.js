import {
  isSameType,
  isSameEl,
  isSameTypeArr,
  isSameElArr,
} from '../oldfunctions/isSame.js';

test('are all elements of the same type?', () => {
  const nums = [1, 2, 3, 1000];
  const strings = ['Salut', 'Hello', 'Привет'];
  const objects = [
    {
      planet: 'Earth',
    },
    {
      name: 'John',
      lastname: 'Shepard',
    },
  ];

  const bool = [true, true, false];
  const und = [undefined, undefined, undefined];
  const all = [true, 12, 'lol'];

  nums.every((i) => expect(isSameType('number', i)).toBeTruthy());
  strings.every((i) => expect(isSameType('string', i)).toBeTruthy());
  objects.every((i) => expect(isSameType('object', i)).toBeTruthy());
  bool.every((i) => expect(isSameType('boolean', i)).toBeTruthy());
  und.every((i) => expect(isSameType('undefined', i)).toBeTruthy());
  all.every((i) => expect(isSameType('string', i)).toBeFalsy());
});

test('are all elements of the same?', () => {
  expect(
    isSameEl('ukulele', 'guitar', 'piano') && isSameEl(1, 100, 10),
  ).toBeFalsy();
  expect(isSameEl('lol', 'lol', 'lol') && isSameEl(1, 1, 1)).toBeTruthy();
});

test('are all elements in array of the same type?', () => {
  const nums = [1, 2, 3, 1000];
  const strings = ['Salut', 'Hello', 'Привет'];

  expect(
    isSameTypeArr('number', nums) && isSameTypeArr('string', strings),
  ).toBeTruthy();
});

test('are all elements in array the same?', () => {
  const arr = [1, 1, 1];
  const arr2 = ['1', '1', '1'];
  const arr3 = [1, '1', 1];
  const arr4 = [1, 100, 1];

  expect(isSameElArr(arr) && isSameElArr(arr2)).toBeTruthy();
  expect(isSameElArr(arr3) && isSameElArr(arr4)).toBeFalsy();
});
