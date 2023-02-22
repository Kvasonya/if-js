import User from './User.js';

export default class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    super(props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = 2023;
    return currentYear - this.admissionYear;
  }
}
