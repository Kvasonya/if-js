import { copyArray } from '../src/copyArray';

test('create a copy of the array', () => {
  const arr = [1, 2, 3];
  const link = arr;
  const copy = copyArray(arr);
  expect(copyArray(arr)).toStrictEqual([1, 2, 3]);
  expect(arr === link && arr !== copy).toBeTruthy();
});
