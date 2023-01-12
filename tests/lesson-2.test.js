import { multiplication } from '../src/lesson-2.js';

test('array data multiplication result', () => {
  expect(multiplication([1, 2, 3, 4, 5])).toBe(120);
});
