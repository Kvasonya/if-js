const line = '-----';

//--------ex 1---------
let user = 'John Doe';

console.log(user);

let student = 'Anna Kvasova';

console.log(student);

user = student;

//Anna Kvasova
console.log(user);

console.log(line);

//--------ex 2---------
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

console.log(line);

//--------ex 3---------
const arrayOne = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arrayOne.length; i++) {
  result = result * arrayOne[i];
}

console.log(result);

console.log(line);

const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arrayTwo.length; i++) {
  if (arrayTwo[i] > 5 && arrayTwo[i] < 10) {
    console.log(arrayTwo[i]);
  }
}

console.log(line);

for (let i = 0; i < arrayTwo.length; i++) {
  if (arrayTwo[i] !== 0 && arrayTwo[i] % 2 === 0) {
    console.log(arrayTwo[i]);
  }
}
