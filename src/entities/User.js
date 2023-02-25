export default class User {
  constructor({ firstname, lastname }) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
