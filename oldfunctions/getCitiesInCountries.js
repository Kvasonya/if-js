import { uniqueObjByOneKey } from './uniqueItems.js';

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

export const setCitiesInCountries = (data) => {
  const setCountries = data.reduce((acc, item) => {
    acc.add(item.country, item);
    return acc;
  }, new Set());

  const uniqCountries = Array.from(setCountries.values());

  const listCountries = {};

  uniqCountries.forEach((country) => {
    listCountries[country] = new Set();
    data.forEach((item) => {
      if (country.includes(item.country)) {
        listCountries[country].add(item.city);
      }
    });
    listCountries[country] = Array.from(listCountries[country].values());
  });

  return listCountries;
};
