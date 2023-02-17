export const simpleArrComparison = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arrToStr = (arr) => arr.sort().join('');
  return arrToStr(arr1) === arrToStr(arr2);
};

//or

// export const simpleArrComparison2 = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//
//   const arrToStr = (arr) => arr.sort().join('');
//   return Object.is(arrToStr(arr1), arrToStr(arr2));
// };
