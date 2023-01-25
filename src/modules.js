//--------lesson-3_task-1---------
const multiplication = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result = result * arr[i];
  }
  return result;
};

const palindrome = function (string) {
  const checkedStr = string;

  if (typeof string === 'undefined') {
    return 'No data';
  } else {
    string = string
      .toString()
      .toLowerCase()
      .split(' ')
      .join('')
      .replace(/[^a-zа-яё0-9]/gi, '');
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] !== string[string.length - 1 - i]) {
        return `${checkedStr} - It's not a palindrome`;
      }
    }
  }
  return `${checkedStr} - It's a palindrome`;
};

//--------lesson-3_task-2---------
const min = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
};

const max = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

const minTernary = function (a, b) {
  //------const minTernary = (a, b) => (a < b ? a : b);
  return +(a < b ? a : b);
};

const maxTernary = function (a, b) {
  //------const maxTernary = (a, b) => (a > b ? a : b);
  return +(a > b ? a : b);
};

//--------lesson-3_task-3---------

const renameZero = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].toString().replaceAll('0', 'zero');
    if (!arr[i].includes('zero')) {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
};

//lesson-4_task-1

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

//lesson-5_task-1

//1 version (this is bad)
const getNewDateFormatOne = function (date) {
  const newDate = date.replace(/-/gi, '').split('');
  const year = newDate[0] + newDate[1] + newDate[2] + newDate[3];
  const month = newDate[4] + newDate[5] + '.';
  const day = newDate[6] + newDate[7] + '.';
  return day + month + year;
};

//2 version
const getNewDateFormatTwo = function (date) {
  return date
    .replace(/-/gi, '.')
    .replace(
      /(?<year>\d+).(?<month>\d{1,2}).(?<day>\d{1,2})/,
      '$<day>.$<month>.$<year>',
    );
};

//3 version
const getNewDateFormatThree = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, '$<day>.$<month>.$<year>');
};

//4 version
const newDateFormatReplacer = function (match, year, month, day) {
  return [day, month, year].join('.');
};

//or...
const getNewDateFormatFour = function (date) {
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

export {
  multiplication,
  palindrome,
  min,
  max,
  minTernary,
  maxTernary,
  renameZero,
  sum,
  getNewDateFormatOne,
  getNewDateFormatTwo,
  getNewDateFormatThree,
  newDateFormatReplacer,
  getNewDateFormatFour,
  searchPlace,
};
