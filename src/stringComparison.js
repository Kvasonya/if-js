export const getStringForComparison = (str) =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .split(' ')
    .join('')
    .replaceAll(/([^a-zа-яё0-9])/gi, '');
