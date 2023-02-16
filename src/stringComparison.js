export const getStringForComparison = (str) =>
  str
    .toString()
    .toLowerCase()
    .split(' ')
    .join('')
    .replaceAll(/([^a-zа-яё0-9])/gi, '');
