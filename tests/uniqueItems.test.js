import {
  uniqueItems,
  uniqueObjByOneKey,
  uniqueValuesArr,
  getNewSet,
  arrValuesInSet,
} from '../oldfunctions/uniqueItems.js';

test('find unique elements in array', () => {
  const data = [
    'un chat',
    'un chien',
    'un oiseau',
    'une chatte',
    'un chat',
    'un cheval',
    'un oiseau',
  ];

  const setData = new Set(data);

  expect(
    uniqueItems(data) && uniqueValuesArr(data) && arrValuesInSet(setData),
  ).toStrictEqual([
    'un chat',
    'un chien',
    'un oiseau',
    'une chatte',
    'un cheval',
  ]);
});

test('find unique objects in array', () => {
  const data = [
    { firstname: 'Bella', lastname: 'Goth' },
    { firstname: 'Don', lastname: 'Lotario' },
    { firstname: 'Mortimer', lastname: 'Goth' },
  ];
  expect(uniqueObjByOneKey(data, 'lastname')).toStrictEqual([
    { firstname: 'Bella', lastname: 'Goth' },
    { firstname: 'Don', lastname: 'Lotario' },
  ]);
});

test('get new Set by key', () => {
  const data = [
    { firstname: 'Bella', lastname: 'Goth' },
    { firstname: 'Don', lastname: 'Lotario' },
    { firstname: 'Mortimer', lastname: 'Goth' },
  ];
  expect(Array.from(getNewSet(data, 'lastname'))).toStrictEqual([
    'Goth',
    'Lotario',
  ]);
});
