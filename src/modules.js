//lesson-6_task-1

const checkPalindrome2 = (string) => {
  string = string
    .toString()
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]/gi, '');
  return string === string.split('').reverse().join('');
};

//------lesson-6_task-2

const getStringForComparison = (str) =>
  str
    .toString()
    .toLowerCase()
    .split(' ')
    .join('')
    .replaceAll(/([^a-zа-яё0-9])/gi, '');

const searchPlaceByFilter = (query, data) => {
  let foundMatches = [];
  const queryPlace = getStringForComparison(query);

  if (queryPlace.trim() === '') {
    return 'Please, enter your query :)';
  } else {
    foundMatches = data
      .filter((item) =>
        getStringForComparison(item.country + item.city + item.name).includes(
          queryPlace,
        ),
      )
      .map((item) => `${item.country}, ${item.city}, ${item.name}`);
    if (foundMatches.toString() === '') {
      return 'Sorry, nothing found :(';
    }
  }
  return foundMatches;
};

//lesson-6_task-3

const copyArray = (arr) => [...arr];

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

export {
  checkPalindrome2,
  searchPlaceByFilter,
  uniqueItems,
  uniqueObjByOneKey,
  getCitiesInCountries,
};
