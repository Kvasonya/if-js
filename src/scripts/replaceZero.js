export const renameZero = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].toString().replaceAll('0', 'zero');
    if (!arr[i].includes('zero')) {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
};

export const renameZeroMap = (arr) =>
  arr.map((item) =>
    item.toString().includes('0')
      ? item.toString().replaceAll('0', 'zero')
      : item,
  );
