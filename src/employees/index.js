export class Employee {
  constructor(name, quota) {
    this._name = name;
    this._quota = quota;
  }

  get name() {
    return this._name;
  }

  get quota() {
    return this._quota;
  }
}
