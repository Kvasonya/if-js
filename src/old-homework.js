// //--------lesson-2_task-1---------
//
// let user = 'John Doe';
//
// console.log(user);
//
// const student = 'Anna Kvasova';
//
// console.log(student);
//
// user = student;
//
// //Anna Kvasova
// console.log(user);
//
// //--------lesson-2_task-2---------
//
// let test = 1;
//
// test += 1;
//
// //2
// console.log(test);
//
// test += '1';
//
// //21
// console.log(test);
//
// test -= 1;
//
// //20
// console.log(test);
//
// test = true;
//
// //true
// console.log(test);
//
// //--------lesson-2_task-3---------
//
// const arrayOne = [2, 3, 5, 8];
// let result = 1;
//
// for (let i = 0; i < arrayOne.length; i += 1) {
//   result = result * arrayOne[i];
// }
// console.log(result);
//
// const multiplication = function (arr) {
//   let result = 1;
//   for (let i = 0; i < arr.length; i += 1) {
//     result = result * arr[i];
//   }
//   return result;
// };
//
// console.log(multiplication(arrayOne));
//
// const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3];
//
// for (let i = 0; i < arrayTwo.length; i += 1) {
//   if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
//     console.log(arrayTwo[i]);
//   }
// }
//
// for (let i = 0; i < arrayTwo.length; i += 1) {
//   if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
//     console.log(arrayTwo[i]);
//   }
// }
//
// for (let i = 0; i < arrayTwo.length; i += 1) {
//   if (arrayTwo[i] !== 0 && arrayTwo[i] % 2 === 0) {
//     console.log(arrayTwo[i]);
//   }
// }
// //--------lesson-3_task-1---------
//
// const palindrome = function (str) {
//   const checkedStr = str;
//
//   if (str.length < 1 || str.toString().trim() === '') {
//     return 'No data';
//   } else {
//     str = str
//       .toString()
//       .toLowerCase()
//       .split(' ')
//       .join('')
//       .replace(/[^a-zа-яё0-9]/gi, '');
//     for (let i = 0; i < str.length; i += 1) {
//       if (str[i] !== str[str.length - 1 - i]) {
//         return `${checkedStr} - It's not a palindrome`;
//       }
//     }
//   }
//   return `${checkedStr} - It's a palindrome`;
// };
//
// console.log(palindrome('шалаш')); //------true
//
// //--------lesson-3_task-2---------
//
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
// const minTernary = (a, b) => (a < b) ? a : b;
//
// const maxTernary = (a, b) => (a > b) ? a : b;
//
// console.log(min(5, 10));
//
// console.log(max(5, 10));
//
// console.log(minTernary(5, 10));
//
// console.log(maxTernary(5, 10));
//
// //--------lesson-3_task-3---------
//
// const arrayThree = [10, 22, 42, 70, 100, 11, 40, 67, 8, 99];
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
// const generateArray = (length, max) =>
//   [...new Array(length)].map(() => Math.round(Math.random() * max));
//
// const generateArrayNegative = (length, min, max) =>
//   [...new Array(length)].map(() =>
//     Math.round(Math.random() * (max - min) + min),
//   );
//
// const randomArray = generateArray(10, 100);
//
// const randomArrayNegative = generateArrayNegative(12, -100, 1000);
//
// console.log(arrayThree);
// console.log(renameZero(arrayThree));
//
// console.log(randomArray);
// console.log(renameZero(randomArray));
//
// console.log(randomArrayNegative);
// console.log(renameZero(randomArrayNegative));
//
// //--------lesson-4_task-1---------
//
// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
//
// const sumArrow = (a) => (b) => a + b;
//
// console.log(sum(5)(2));
// console.log(sumArrow(5)(2));
//
// //--------lesson-4_task-2---------
//
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
//
// const text = document.querySelectorAll('#text1, #text2, #text3');
//
// const getColor = function () {
//   let i = 0;
//   return function selectColor(event) {
//     event.target.style.color = colors[i];
//     event.target.classList.remove('text_no-active');
//     event.target.classList.add('text_active');
//     i += 1;
//     if (i === colors.length) {
//       i = 0;
//     }
//   };
// };
//
// for (let i = 0; i < text.length; i += 1) {
//   text[i].addEventListener('click', getColor());
// }
//
// //--------lesson-4_task-3---------
//
// //in the directory tests
//
// // //--------lesson-5_task-1---------
//
// //1 version
// const getNewDateFormatOne = function (date) {
//   const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
//   return date.replace(regExp, '$<day>.$<month>.$<year>');
// };
//
// //2 version
// const newDateFormatReplacer = function (match, year, month, day) {
//   return [day, month, year].join('.');
// };
//
// const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
//
// //or...
// const getNewDateFormatTwo = function (date) {
//   const regExp = /(?<year>\d+)-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
//   return date.replace(regExp, newDateFormatReplacer);
// };
//
// //tests
// const date = '2020-11-26';
// const dateTest = '953-1-2';
//
// console.log(getNewDateFormatOne(date));
//
// console.log(date.replace(regExp, newDateFormatReplacer));
//
// console.log(getNewDateFormatTwo(date));
//
// console.log(dateTest.replace(regExp, newDateFormatReplacer));
//
// //--------lesson-5_task-2---------
//
// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];
//
// function searchPlace(query, data) {
//   const foundMatches = [];
//
//   function getStringForComparison(str) {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .join('')
//       .replaceAll(/([^a-z])/gi, '');
//   }
//
//   if (
//     query.trim() === '' ||
//     query.match(/[0-9]{5,}/gi)
//   ) {
//     return 'Please, enter your query :)';
//   } else {
//     for (let i = 0; i < data.length; i += 1) {
//       const namePlace = getStringForComparison(
//         data[i].country + data[i].city + data[i].hotel,
//       );
//       const queryPlace = getStringForComparison(query);
//       if (namePlace.includes(queryPlace)) {
//         foundMatches.push(
//           `${data[i].country}, ${data[i].city}, ${data[i].hotel}`,
//         );
//       }
//     }
//
//     if (foundMatches.toString() === '') {
//       return 'Sorry, nothing found :(';
//     }
//
//     return foundMatches;
//   }
// }
//
// console.log(searchPlace('Berlin', data));

//
// //-----lesson-6_task-1 (IIFE)
// (function () {
//   const checkPalindrome2 = (str) => {
//     str = str
//       .toString()
//       .toLowerCase()
//       .replace(/[^a-zа-яё0-9]/gi, '');
//     return str === str.split('').reverse().join('');
//   };
//
//   console.log(checkPalindrome2('Миру - мир, Риму - Рим'));
//   console.log(checkPalindrome2('Шалаш'));
// })();
//
// //------lesson-6_task-2
//
// const getStringForComparison = (str) =>
//   str
//     .toString()
//     .trim()
//     .toLowerCase()
//     .split(' ')
//     .join('')
//     .replaceAll(/([^a-zа-яё0-9])/gi, '');
//
// const hotels = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa Cruz de Tenerife',
//     country: 'Spain',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Virgin Hotel',
//     city: 'Chicago',
//     country: 'USA',
//   },
//   {
//     name: 'Grand Beach Resort',
//     city: 'Dubai',
//     country: 'United Arab Emirates',
//   },
//   {
//     name: 'Shilla Stay',
//     city: 'Seoul',
//     country: 'South Korea',
//   },
//   {
//     name: 'San Firenze Suites',
//     city: 'Florence',
//     country: 'Italy',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Black Penny Villas',
//     city: 'BTDC, Nuca Dua',
//     country: 'Indonesia',
//   },
//   {
//     name: 'Koko Hotel',
//     city: 'Tokyo',
//     country: 'Japan',
//   },
//   {
//     name: 'Ramada Plaza',
//     city: 'Istanbul',
//     country: 'Turkey',
//   },
//   {
//     name: 'Waikiki Resort Hotel',
//     city: 'Hawaii',
//     country: 'USA',
//   },
//   {
//     name: 'Puro Hotel',
//     city: 'Krakow',
//     country: 'Poland',
//   },
//   {
//     name: 'Asma Suites',
//     city: 'Santorini',
//     country: 'Greece',
//   },
//   {
//     name: 'Cityden Apartments',
//     city: 'Amsterdam',
//     country: 'Netherlands',
//   },
//   {
//     name: 'Mandarin Oriental',
//     city: 'Miami',
//     country: 'USA',
//   },
//   {
//     name: 'Concept Terrace Hotel',
//     city: 'Rome',
//     country: 'Italy',
//   },
//   {
//     name: 'Ponta Mar Hotel',
//     city: 'Fortaleza',
//     country: 'Brazil',
//   },
//   {
//     name: 'Four Seasons Hotel',
//     city: 'Sydney',
//     country: 'Australia',
//   },
//   {
//     name: 'Le Meridien',
//     city: 'Nice',
//     country: 'France',
//   },
//   {
//     name: 'Apart Neptun',
//     city: 'Gdansk',
//     country: 'Poland',
//   },
//   {
//     name: 'Lux Isla',
//     city: 'Ibiza',
//     country: 'Spain',
//   },
//   {
//     name: 'Nox Hostel',
//     city: 'London',
//     country: 'UK',
//   },
//   {
//     name: 'Leonardo Vienna',
//     city: 'Vienna',
//     country: 'Austria',
//   },
//   {
//     name: 'Adagio Aparthotel',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
//   {
//     name: 'Steigenberger Hotel',
//     city: 'Hamburg',
//     country: 'Germany',
//   },
//   {
//     name: 'DOUBLE for TEST',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
// ];
//
// const searchPlaceByFilter = (query, data) => {
//   let foundMatches = [];
//   const queryPlace = getStringForComparison(query);
//
//   if (!queryPlace) {
//     return 'Please, enter your query :)';
//   } else {
//     foundMatches = data
//       .filter((item) =>
//         getStringForComparison(item.country + item.city + item.name).includes(
//           queryPlace,
//         ),
//       )
//       .map((item) => `${item.country}, ${item.city}, ${item.name}`);
//     if (foundMatches.toString() === '') {
//       return 'Sorry, nothing found :(';
//     }
//   }
//   return foundMatches;
// };
//
// console.log(searchPlaceByFilter(' germany', hotels));
// console.log(searchPlaceByFilter(' Atlantis', hotels));
// console.log(searchPlaceByFilter(' ', hotels));
//
// //lesson-6_task-3
//
// // const copyArray = (arr) => [...arr];
// //
// // const uniqueItems = (arr) => arr.filter((item, index) => index === arr.indexOf(item));
//
// const uniqueObjByOneKey = (arr, keyname) => {
//   return [...arr].reduce((listItems, currentValue) => {
//     if (!listItems.find((item) => item[keyname] === currentValue[keyname])) {
//       listItems.push(currentValue);
//     }
//     return listItems;
//   }, []);
// };
//
// const getCitiesInCountries = (data) => {
//   const uniqueCountries = uniqueObjByOneKey(data, 'country').map(
//     (item) => item.country,
//   );
//
//   const uniqueCities = uniqueObjByOneKey(data, 'city');
//
//   const listCountries = {};
//
//   uniqueCountries.forEach((uniqCountry) => {
//     listCountries[uniqCountry] = [];
//
//     uniqueCities.forEach((item) => {
//       if (item.country.includes(uniqCountry)) {
//         listCountries[uniqCountry].push(item.city);
//       }
//     });
//   });
//   return listCountries;
// };
//
// console.log(getCitiesInCountries(hotels));
//

// //------lesson-7_task-1
//
// const obj1 = {
//   a: 'a',
//   b: {
//     a: 'a',
//     b: 'b',
//     c: {
//       a: 1,
//     },
//   },
// };
// const obj2 = {
//   b: {
//     c: {
//       a: 1,
//     },
//     b: 'b',
//     a: 'a',
//   },
//   a: 'a',
// };
// const obj3 = {
//   a: {
//     c: {
//       a: 'a',
//     },
//     b: 'b',
//     a: 'a',
//   },
//   b: 'b',
// };
//
// const obj4 = {
//   a: {
//     c: {
//       a: 'a',
//       b: {
//         a: 'a',
//         b: 'b',
//       },
//     },
//     b: 'b',
//     a: 'a',
//   },
//   b: 'b',
// };
//
// const obj5 = {
//   a: {
//     b: 'b',
//     a: 'a',
//     c: {
//       b: {
//         b: 'b',
//         a: 'a',
//       },
//       a: 'a',
//     },
//   },
//   b: 'b',
// };
//
// const simpleArrComparison = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//
//   const arrToStr = (arr) => arr.sort().join('');
//   return arrToStr(arr1) === arrToStr(arr2);
// };
//
// const isSameType = (type, ...i) => {
//   return i.every((item) => typeof item === `${type}`);
// };
//
// const isSameEl = (...el) => {
//   return el.every((item) => item === el[0] && typeof item === typeof el[0]);
// };
//
// const deepEqual = (object1, object2) => {
//   if (!isSameType('object', object1, object2)) {
//     return false;
//   }
//
//   const obj1Keys = Object.getOwnPropertyNames(object1);
//   const obj2Keys = Object.getOwnPropertyNames(object2);
//
//   if (!simpleArrComparison(obj1Keys, obj2Keys)) {
//     return false;
//   } else {
//     for (let i = 0; i < obj1Keys.length; i += 1) {
//       const key = obj1Keys[i];
//
//       if (
//         (!isSameType('object', object1[key], object2[key]) &&
//           !isSameEl(object1[key], object2[key])) ||
//         (isSameType('object', object1[key], object2[key]) &&
//           !deepEqual(object1[key], object2[key]))
//       ) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
//
// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));
// console.log(deepEqual(obj4, obj5)); //-----объекты с еще одним уровнем вложенности
