//lesson-6_task-3

// const copyArray = (arr) => [...arr];

const uniqueItems = (arr) =>
  arr.filter((item, index) => index === arr.indexOf(item));

const uniqueObjByOneKey = (arr, keyname) => {
  return [...arr].reduce((listItems, currentValue) => {
    if (!listItems.find((item) => item[keyname] === currentValue[keyname])) {
      listItems.push(currentValue);
    }
    return listItems;
  }, []);
};

const getCitiesInCountries = (data) => {
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

export { getCitiesInCountries };
