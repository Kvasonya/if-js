import { uniqueObjByOneKey } from './uniqueItems';

export const getCitiesInCountries = (data) => {
  const uniqueCountries = uniqueObjByOneKey(data, 'country').map(
    (item) => item.country,
  );

  const uniqueCities = uniqueObjByOneKey(data, 'city');

  const listCountries = {};

  uniqueCountries.forEach((uniqCountry) => {
    listCountries[uniqCountry] = [];

    uniqueCities.forEach((item) => {
      if (item.country.includes(uniqCountry)) {
        listCountries[uniqCountry].push(item.city);
      }
    });
  });
  return listCountries;
};
