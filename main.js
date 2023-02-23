//------lesson-8_task-1
// import Students from './src/entities/Students.js';

class User {
  constructor({ firstname, lastname }) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    super(props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = 2023;
    return currentYear - this.admissionYear;
  }

  get graduation() {
    return this.admissionYear + 5;
  }
}

class Students {
  constructor(students) {
    this.students = students.map(
      (student) =>
        new Student({
          firstname: student.firstName,
          lastname: student.lastName,
          admissionYear: student.admissionYear,
          courseName: student.courseName,
        }),
    );
  }

  getInfo() {
    return this.students
      .sort((a, b) => a.course - b.course)
      .filter((student) => student.course >= 1 && student.course <= 5)
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, ${student.course} курс`,
      );
  }

  getInfoGraduates() {
    return this.students
      .sort()
      .filter((student) => student.course > 5)
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, год выпуска: ${student.graduation}`,
      );
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

const students = new Students(studentsData);
console.log(students.getInfo());
console.log(students.getInfoGraduates());
