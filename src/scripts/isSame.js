export const isSameType = (type, ...i) => {
  return i.every((item) => typeof item === `${type}`);
};

export const isSameString2 = (...str) => {
  return str.every((item) => item === str[0] && typeof item === 'string');
};

export const isSameEl = (...el) => {
  return el.every((item) => item === el[0] && typeof item === typeof el[0]);
};
