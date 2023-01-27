//-----lesson-6_task-1

const palindrome2 = (string) =>
  string ===
  string
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
    .replace(/[^a-zа-яё0-9]/gi, '');

console.log(palindrome2('шалаш'));
console.log(palindrome2('Шалаш')); //-----why false?

//------lesson-6_task-2

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchPlaceByFilter(query) {
  let foundMatches = undefined;

  function getStringForComparison(string) {
    return string
      .toLowerCase()
      .split(' ')
      .join('')
      .replaceAll(/([^a-z])/gi, '');
  }

  if (query === undefined || query.trim() === '') {
    return 'Please, enter your query :)';
  } else {
    const queryPlace = getStringForComparison(query);
    foundMatches = data.filter(function callbackFn(item) {
      return getStringForComparison(
        item.country + item.city + item.hotel,
      ).includes(queryPlace);
    });
  }

  if (foundMatches.toString() === '') {
    return 'Sorry, nothing found :(';
  }

  return foundMatches;
}

console.log(searchPlaceByFilter(' germany'));
