import { getStringForComparison } from './stringComparison';

export const searchPlace = (query, data) => {
  const foundMatches = [];

  if (query.trim() === '' || query.match(/[0-9]{5,}/gi)) {
    return 'Please, enter your query :)';
  } else {
    for (let i = 0; i < data.length; i += 1) {
      const namePlace = getStringForComparison(
        data[i].country + data[i].city + data[i].hotel,
      );
      const queryPlace = getStringForComparison(query);
      if (namePlace.includes(queryPlace)) {
        foundMatches.push(
          `${data[i].country}, ${data[i].city}, ${data[i].hotel}`,
        );
      }
    }

    if (foundMatches.toString() === '') {
      return 'Sorry, nothing found :(';
    }

    return foundMatches;
  }
};

export const searchPlaceByFilter = (query, data) => {
  let foundMatches = [];
  const queryPlace = getStringForComparison(query);

  if (!queryPlace) {
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
