import { getStringForComparison } from '../oldfunctions/stringComparison.js';

test('get string convenient for comparison with another string and get Number toString', () => {
  const ifString = 'I loVe My__funny   Cat!!!';
  const ifNumber = 13130;

  expect(getStringForComparison(ifString)).toBe('ilovemyfunnycat');
  expect(getStringForComparison(ifNumber)).toBe('13130');
});
