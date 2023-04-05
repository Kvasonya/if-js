import { renameZero, renameZeroMap } from '../oldfunctions/replaceZero.js';

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

test('rename number 0 to word zero', () => {
  const arrayTest = [10, 22, 70, 100, -10, 40, 15, 607];
  expect(renameZeroMap(arrayTest)).toStrictEqual([
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
