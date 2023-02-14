export const searchPlace = (query, data) => {
  const foundMatches = [];

  function getStringForComparison(str) {
    return str
      .toLowerCase()
      .split(' ')
      .join('')
      .replaceAll(/([^a-z])/gi, '');
  }

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
