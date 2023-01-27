// //--------lesson-3_task-1---------
// const multiplication = function (arr) {
//   let result = 1;
//   for (let i = 0; i < arr.length; i += 1) {
//     result = result * arr[i];
//   }
//   return result;
// };
//
// const palindrome = function (string) {
//   const checkedStr = string;
//
//   if (typeof string === 'undefined') {
//     return 'No data';
//   } else {
//     string = string
//       .toString()
//       .toLowerCase()
//       .split(' ')
//       .join('')
//       .replace(/[^a-zа-яё0-9]/gi, '');
//     for (let i = 0; i < string.length; i += 1) {
//       if (string[i] !== string[string.length - 1 - i]) {
//         return `${checkedStr} - It's not a palindrome`;
//       }
//     }
//   }
//   return `${checkedStr} - It's a palindrome`;
// };
//
// //--------lesson-3_task-2---------
// const min = function (a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// };
//
// const max = function (a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// };
//
// const minTernary = function (a, b) {
//   //------const minTernary = (a, b) => (a < b ? a : b);
//   return +(a < b ? a : b);
// };
//
// const maxTernary = function (a, b) {
//   //------const maxTernary = (a, b) => (a > b ? a : b);
//   return +(a > b ? a : b);
// };
//
// //--------lesson-3_task-3---------
//
// const renameZero = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i].toString().replaceAll('0', 'zero');
//     if (!arr[i].includes('zero')) {
//       arr[i] = Number(arr[i]);
//     }
//   }
//   return arr;
// };
//
// //lesson-4_task-1
//
// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

//lesson-5_task-1

//1 version
const getNewDateFormatOne = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, '$<day>.$<month>.$<year>');
};

//2 version
const newDateFormatReplacer = function (match, year, month, day) {
  return [day, month, year].join('.');
};

//or...
const getNewDateFormatTwo = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, newDateFormatReplacer);
};

//lesson-5_task-2

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

function searchPlace(query) {
  const foundMatches = [];

  function getStringForComparison(string) {
    return string
      .toLowerCase()
      .split(' ')
      .join('')
      .replaceAll(/([^a-z])/gi, '');
  }

  if (
    query === undefined ||
    query.trim() === '' ||
    query.match(/[0-9]{5,}/gi)
  ) {
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
    return foundMatches; //-------как добавить сообщение в случае, если ничего не найдено, т.е. на выходе пустой массив?
  }
}

//lesson-6_task-1

const palindrome2 = (string) =>
  string ===
  string
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
    .replace(/[^a-zа-яё0-9]/gi, '');

//lesson-6_task-2

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
    foundMatches = hotels
      .filter(function callbackFn(item) {
        return getStringForComparison(
          item.country + item.city + item.name,
        ).includes(queryPlace);
      })
      .map((item) => {
        return `${item.country}, ${item.city}, ${item.name}`;
      });
  }

  if (foundMatches.toString() === '') {
    return 'Sorry, nothing found :(';
  }

  return foundMatches;
}

export {
  // multiplication,
  // palindrome,
  // min,
  // max,
  // minTernary,
  // maxTernary,
  // renameZero,
  // sum,
  // getNewDateFormatOne,
  // getNewDateFormatTwo,
  // newDateFormatReplacer,
  // searchPlace,
  palindrome2,
  searchPlaceByFilter,
};
