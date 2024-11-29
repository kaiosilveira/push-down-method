import { Employee } from '..';

export class Salesman extends Employee {
  constructor(name) {
    super(name, 1.5);
  }

  get quota() {
    return this._quota;
  }
}
