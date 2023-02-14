import {
  checkPalindrome2,
  searchPlaceByFilter,
  uniqueItems,
  uniqueObjByOneKey,
  getCitiesInCountries,
} from '../src/modules.js';

//lesson-6 tests

test('is the string a palindrome', () => {
  const isPalindrome = ['шалаш', 'Миру – мир, Риму – Рим', 1001];
  const isNotPalindrome = ['шалаши', 'это не палиндром!', 1010];

  // isNotPalindrome.every(function (str) { expect.palindrome2 }) //-----норм? а как сделать то же самое для false?

  for (let i = 0; i < isPalindrome.length; i += 1) {
    expect(checkPalindrome2(isPalindrome[i])).toBeTruthy();
  }
  for (let i = 0; i < isPalindrome.length; i += 1) {
    expect(checkPalindrome2(isNotPalindrome[i])).toBeFalsy();
  }
});

test('find all locations by search query', () => {
  const data = [
    { name: 'Hostel Friendship', city: 'Berlin', country: 'Germany' },
    { name: 'Steigenberger Hotel', city: 'Hamburg', country: 'Germany' },
  ];
  const queryGermany = ['Germany', 'germany', ' gErmany  '];
  const queryEmpty = ' ';

  for (let i = 0; i < queryGermany.length; i += 1) {
    expect(searchPlaceByFilter(queryGermany[i], data)).toStrictEqual([
      'Germany, Berlin, Hostel Friendship',
      'Germany, Hamburg, Steigenberger Hotel',
    ]);
  }
  expect(searchPlaceByFilter(queryEmpty)).toBe('Please, enter your query :)');
});

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

test('create a list of unique countries and cities in those countries', () => {
  const data = [
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'DOUBLE for TEST',
      city: 'Edinburgh',
      country: 'UK',
    },
  ];
  expect(getCitiesInCountries(data)).toStrictEqual({
    UK: ['Edinburgh'],
    Spain: ['Santa Cruz de Tenerife', 'Ibiza'],
  });
});
