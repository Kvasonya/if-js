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
