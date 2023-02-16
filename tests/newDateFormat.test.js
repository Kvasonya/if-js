import {
  getNewDateFormatOne,
  getNewDateFormatTwo,
  newDateFormatReplacer,
} from '../src/newDateFormat';

test('make a new date format (Y-M-D -> D.M.Y)', () => {
  expect(getNewDateFormatOne('2023-01-25')).toBe('25.01.2023');
  expect(getNewDateFormatTwo('2023-01-25')).toBe('25.01.2023');
});

test('make a new date format by using replacer (Y-M-D -> D.M.Y)', () => {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  expect(newDateFormatReplacer(regExp, '2023', '01', '25')).toBe('25.01.2023');
});
