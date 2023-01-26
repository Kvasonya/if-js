//--------lesson-5_task-1---------

//1 version
const getNewDateFormatOne = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g; //----не могу сообразить, как сделать в регулярном выражении, чтобы число было в месяцах только 01-12/1-12б а в днях 01-31(1-31)
  return date.replace(regExp, '$<day>.$<month>.$<year>');
};

//2 version
const newDateFormatReplacer = function (match, year, month, day) {
  return [day, month, year].join('.');
};

const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;

//or...
const getNewDateFormatTwo = function (date) {
  const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
  return date.replace(regExp, newDateFormatReplacer);
};

//tests
const date = '2020-11-26';
const dateTest = '953-1-2';

console.log(getNewDateFormatOne(date));

console.log(date.replace(regExp, newDateFormatReplacer));

console.log(getNewDateFormatTwo(date));

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
console.log(searchPlace(' ')); //-----Please, enter your query :)
console.log(searchPlace('Russia'));
console.log(searchPlace(' germany ')); //------как сделать, чтобы выдавало результат при запросе вида 'berlin germany', 'germany hostel' итп? и как быть с грамматическими ошибками (rassia) или опечатками (напр., Berlinm)?
