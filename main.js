//------lesson-7_task-1

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const obj4 = {
  a: {
    c: {
      a: 'a',
      b: {
        a: 'a',
        b: 'b',
      },
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const obj5 = {
  a: {
    b: 'b',
    a: 'a',
    c: {
      b: {
        b: 'b',
        a: 'a',
      },
      a: 'a',
    },
  },
  b: 'b',
};

const simpleArrComparison = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arrToStr = (arr) => arr.sort().join('');
  return arrToStr(arr1) === arrToStr(arr2);
};

const isSameType = (type, ...i) => {
  return i.every((item) => typeof item === `${type}`);
};

const isSameEl = (...el) => {
  return el.every((item) => item === el[0] && typeof item === typeof el[0]);
};

const deepEqual = (object1, object2) => {
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

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj4, obj5)); //-----объекты с еще одним уровнем вложенности
