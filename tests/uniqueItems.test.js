import { uniqueItems, uniqueObjByOneKey } from '../src/uniqueItems';

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
  expect(uniqueItems(data)).toStrictEqual([
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
