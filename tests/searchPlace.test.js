import {
  searchPlace,
  searchPlaceByFilter,
} from '../src/scripts/searchPlace.js';

test('find all locations by search query', () => {
  const data = [
    { country: 'Germany', city: 'Berlin', hotel: 'Hostel Friendship' },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];

  const queryBerlin = ['Berlin', 'berlin', ' BErlin  '];
  const queryEmpty = ' ';

  for (let i = 0; i < queryBerlin.length; i += 1) {
    expect(searchPlace(queryBerlin[i], data)).toStrictEqual([
      'Germany, Berlin, Hostel Friendship',
      'Germany, Berlin, Hotel Rehberge Berlin Mitte',
    ]);
  }
  expect(searchPlace(queryEmpty)).toBe('Please, enter your query :)');
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
