import User from './User.js';

export default class Student extends User {
  constructor({ admissionYear, courseName, ...props }) {
    super(props);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }

  get graduation() {
    return this.admissionYear + 5;
  }
}