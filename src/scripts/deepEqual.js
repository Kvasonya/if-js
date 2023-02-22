import { isSameType, isSameEl } from './isSame.js';
import { simpleArrComparison } from './simpleArrComparison.js';

export const deepEqual = (object1, object2) => {
  if (!isSameType('object', object1, object2)) {
    return false;
  }

  const obj1Keys = Object.getOwnPropertyNames(object1);
  const obj2Keys = Object.getOwnPropertyNames(object2);

  if (!simpleArrComparison(obj1Keys, obj2Keys)) {
    return false;
  } else {
    for (let i = 0; i < obj1Keys.length; i += 1) {
      const key = obj1Keys[i];

      if (
        (!isSameType('object', object1[key], object2[key]) &&
          !isSameEl(object1[key], object2[key])) ||
        (isSameType('object', object1[key], object2[key]) &&
          !deepEqual(object1[key], object2[key]))
      ) {
        return false;
      }
    }
  }
  return true;
};
