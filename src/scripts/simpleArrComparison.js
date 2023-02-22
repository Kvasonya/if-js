export const simpleArrComparison = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arrToStr = (arr) => arr.sort().join('');
  return arrToStr(arr1) === arrToStr(arr2);
};
