//--------lesson-2_task-1---------

let user = 'John Doe';

console.log(user);

const student = 'Anna Kvasova';

console.log(student);

user = student;

//Anna Kvasova
console.log(user);

//--------lesson-2_task-2---------

let test = 1;

test += 1;

//2
console.log(test);

test += '1';

//21
console.log(test);

test -= 1;

//20
console.log(test);

test = true;

//true
console.log(test);

//--------lesson-2_task-3---------

const arrayOne = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arrayOne.length; i += 1) {
  result = result * arrayOne[i];
}
console.log(result);

const multiplication = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    result = result * arr[i];
  }
  return result;
};

console.log(multiplication(arrayOne));

const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
    console.log(arrayTwo[i]);
  }
}

for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
    console.log(arrayTwo[i]);
  }
}

for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] !== 0 && arrayTwo[i] % 2 === 0) {
    console.log(arrayTwo[i]);
  }
}
//--------lesson-3_task-1---------

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

console.log(palindrome('шалаш')); //------true

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

console.log(min(5, 10));

console.log(max(5, 10));

console.log(minTernary(5, 10));

console.log(maxTernary(5, 10));

//--------lesson-3_task-3---------

const arrayThree = [10, 22, 42, 70, 100, 11, 40, 67, 8, 99];

const renameZero = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].toString().replaceAll('0', 'zero');
    if (!arr[i].includes('zero')) {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
};

const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const generateArrayNegative = (length, min, max) =>
  [...new Array(length)].map(() =>
    Math.round(Math.random() * (max - min) + min),
  );

const randomArray = generateArray(10, 100);

const randomArrayNegative = generateArrayNegative(12, -100, 1000);

console.log(arrayThree);
console.log(renameZero(arrayThree));

console.log(randomArray);
console.log(renameZero(randomArray));

console.log(randomArrayNegative);
console.log(renameZero(randomArrayNegative));

//--------lesson-4_task-1---------

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

const sumArrow = (a) => (b) => a + b;

console.log(sum(5)(2));
console.log(sumArrow(5)(2));

//--------lesson-4_task-2---------

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text = document.querySelectorAll('#text1, #text2, #text3');

const getColor = function () {
  let i = 0;
  return function selectColor(event) {
    event.target.style.color = colors[i];
    event.target.classList.remove('text_no-active');
    event.target.classList.add('text_active');
    i += 1;
    if (i === colors.length) {
      i = 0;
    }
  };
};

for (let i = 0; i < text.length; i += 1) {
  text[i].addEventListener('click', getColor());
}

//--------lesson-4_task-3---------

//in the directory tests

//--------lesson-5_task-1---------

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
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g; //----не могу сообразить, как сделать в регулярном выражении, чтобы число было в месяцах только 01-12/1-12б а в днях 01-31(1-31)
  return date.replace(regExp, '$<day>.$<month>.$<year>');
};

//4 version
const newDateFormatReplacer = function (match, year, month, day) {
  return [day, month, year].join('.');
};

const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;

//or...
const getNewDateFormatFour = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, newDateFormatReplacer);
};

//tests
const date = '2020-11-26';
const dateTest = '953-1-2';

console.log(getNewDateFormatOne(date));
console.log(getNewDateFormatTwo(date));
console.log(getNewDateFormatThree(date));
console.log(
  newDateFormatReplacer(
    /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g,
    '2020',
    '10',
    '15',
  ),
);
console.log(date.replace(regExp, newDateFormatReplacer));
console.log(getNewDateFormatFour(date));

console.log(dateTest.replace(regExp, newDateFormatReplacer));

//--------lesson-5_task-2---------

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
    //-----кагбэ, если больше определенного количества цифр в запросе (вообще необязательное условие)
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
    return foundMatches; //-----как добавить сообщение в случае, если ничего не найдено, т.е. на выходе пустой массив?
  }
}
console.log(searchPlace()); //-----Please, enter your query :)
console.log(searchPlace(' ')); //-----Please, enter your query :)

console.log(searchPlace('Russia'));
console.log(searchPlace(' germany ')); //------как сделать, чтобы выдавало результат при запросе вида 'berlin germany', 'germany hostel' итп? и как быть с грамматическими ошибками (rassia) или опечатками (напр., Berlinm)?
