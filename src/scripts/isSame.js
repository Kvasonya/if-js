//-----are the element types the same?-----

export const isSameType = (type, ...i) =>
  i.every((item) => typeof item === `${type}`);

export const isSameTypeArr = (type, arr) =>
  arr.every((item) => typeof item === `${type}`);

//-----are these the same strings?-----

export const isSameString2 = (...str) =>
  str.every((item) => item === str[0] && typeof item === 'string');

//-----are these the same elements?-----

export const isSameEl = (...el) =>
  el.every((item) => item === el[0] && typeof item === typeof el[0]);

export const isSameElArr = (arr) =>
  arr.every((item) => item === arr[0] && typeof item === typeof arr[0]);
