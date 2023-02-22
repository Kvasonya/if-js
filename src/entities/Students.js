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
    .filter((student) => student.course >= 1 && student.course <= 5)
    .map(
      (student) =>
        `${student.fullName} - ${student.courseName}, ${student.course} курс`,
    );
};

Students.prototype.getInfoGraduates = function () {
  return this.students
    .sort()
    .filter((student) => student.course > 5)
    .map(
      (student) =>
        `${student.fullName} - ${student.courseName}, год выпуска: ${student.graduation}`,
    );
};
