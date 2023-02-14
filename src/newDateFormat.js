const getNewDateFormatOne = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, '$<day>.$<month>.$<year>');
};

const newDateFormatReplacer = function (match, year, month, day) {
  return [day, month, year].join('.');
};

const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;

const getNewDateFormatTwo = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, newDateFormatReplacer);
};

export { getNewDateFormatOne, getNewDateFormatTwo, newDateFormatReplacer };
