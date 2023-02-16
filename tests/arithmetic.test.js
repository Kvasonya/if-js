import {
  multiplication,
  multiplicationReduce,
  max,
  min,
  maxTernary,
  minTernary,
  maxInArray,
  minInArray,
  sum,
  sumArrow,
  sumArray,
} from '../src/arithmetic';

test('array data multiplication result', () => {
  expect(multiplication([1, 2, 3, 4, 5])).toBe(120);
  expect(multiplicationReduce([1, 2, 3, 4, 5])).toBe(120);
});

test('find the smallest number', () => {
  expect(min(5, 3)).toBe(3);
  expect(minTernary(5, 3)).toBe(3);
  expect(minInArray([5, 3, 10])).toBe(3);
});

test('find the largest number', () => {
  expect(max(5, 3)).toBe(5);
  expect(maxTernary(5, 3)).toBe(5);
  expect(maxInArray([5, 3, 10])).toBe(10);
});

test('find the sum of two numbers', () => {
  expect(sum(10)(5)).toBe(15);
  expect(sumArrow(10)(5)).toBe(15);
});

test('find the sum of all elements in array', () => {
  expect(sumArray([2, 3, 10])).toBe(15);
});
