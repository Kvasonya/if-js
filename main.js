const person = {
  name: 'Nick',
  age: 25,
  children: [
    {
      name: 'Mike',
      age: 3,
    },
    {
      name: 'Sarah',
      age: 5,
    }
  ]
};

console.log(person)
console.log(person.children[1])


//Homework
//task 1

let user = 'John Doe';
console.log(user)

let student = 'Anna Kvasova'
console.log(student)

user = student
//Anna Kvasova
console.log(user)


//task 2
let test = 1;
console.log(test)

test  += 1;
//2
console.log(test)

test += '1'
//21
console.log(test)

test -= 1
//20
console.log(test)

test = true
//true
console.log(test)

//task 3
const arrayOne = [
  2, 3, 5, 8
    ]

console.log(arrayOne)

const arrayTwo = [2, 5, 8, 15, 0, 6, 20, 3
]

console.log(arrayTwo)
