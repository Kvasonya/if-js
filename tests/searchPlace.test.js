import { searchPlace } from '../src/searchPlace';

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
