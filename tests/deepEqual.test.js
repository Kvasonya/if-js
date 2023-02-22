import { deepEqual } from '../src/scripts/deepEqual.js';

test('are two objects the same?', () => {
  const obj1 = {
    a: 'a',
    b: 'b',
    c: {
      a: 100,
      b: 'c',
      i: {
        a: 'a',
      },
    },
    i: 'i',
  };

  const obj2 = {
    b: 'b',
    i: 'i',
    c: {
      b: 'c',
      i: {
        a: 'a',
      },
      a: 100,
    },
    a: 'a',
  };

  const obj3 = {
    a: 'b',
    b: 'a',
    c: {
      a: 1,
      d: 'c',
      i: {
        a: 'a',
      },
    },
    i: 'i',
  };

  expect(deepEqual(obj1, obj2)).toBeTruthy();
  expect(deepEqual(obj1, obj3)).toBeFalsy();
});
