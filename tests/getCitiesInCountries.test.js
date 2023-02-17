import { getCitiesInCountries } from '../src/getCitiesInCountries';

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
