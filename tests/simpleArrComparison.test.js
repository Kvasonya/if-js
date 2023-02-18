import { simpleArrComparison } from '../src/simpleArrComparison';

test('are the 2 arrays the same?', () => {
  const arr1 = [1, 10, 'cat', '101'];
  const arr2 = ['cat', 10, '101', 1];
  const arr3 = ['dog', 10, '101', 1];
  const arr4 = [10, '101', 1];

  expect(simpleArrComparison(arr1, arr2)).toBeTruthy();
  expect(
    simpleArrComparison(arr1, arr3) && simpleArrComparison(arr1, arr4),
  ).toBeFalsy();
});
