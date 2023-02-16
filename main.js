//-----lesson-6_task-1 (IIFE)
(function () {
  const checkPalindrome2 = (str) => {
    str = str
      .toString()
      .toLowerCase()
      .replace(/[^a-zа-яё0-9]/gi, '');
    return str === str.split('').reverse().join('');
  };

  console.log(checkPalindrome2('Миру - мир, Риму - Рим'));
  console.log(checkPalindrome2('Шалаш'));
})();

//------lesson-6_task-2

const getStringForComparison = (str) =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .split(' ')
    .join('')
    .replaceAll(/([^a-zа-яё0-9])/gi, '');

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
  {
    name: 'DOUBLE for TEST',
    city: 'Edinburgh',
    country: 'UK',
  },
];

const searchPlaceByFilter = (query, data) => {
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

console.log(searchPlaceByFilter(' germany', hotels));
console.log(searchPlaceByFilter(' Atlantis', hotels));
console.log(searchPlaceByFilter(' ', hotels));

//lesson-6_task-3

// const copyArray = (arr) => [...arr];
//
// const uniqueItems = (arr) => arr.filter((item, index) => index === arr.indexOf(item));

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

console.log(getCitiesInCountries(hotels));
