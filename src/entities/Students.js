import Student from './Student.js';

export default class Students {
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
}

Students.prototype.getInfo = function () {
  return this.students
    .sort((a, b) => a.course - b.course)
    .map(
      (student) =>
        `${student.fullName} - ${student.courseName}, ${student.course} курс`,
    );
};
