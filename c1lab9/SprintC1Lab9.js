class BankAccount {
  constructor() {
    this._balance = 0;
    this._isOpen = false;
  }
  get balance() {
    if (!this._isOpen) {
      throw ValueError;
    }
    return this._balance;
  }
  set balance(value) {
    throw Error;
  }
  open() {
    if (this._isOpen) {
      throw ValueError;
    }
    this._isOpen = true;
  }
  close() {
    if (!this._isOpen) {
      throw ValueError;
    }
    this._isOpen = false;
    this._balance = 0;
  }
  deposit(value) {
    if (!this._isOpen) {
      throw ValueError;
    }
    if (value < 0) {
      throw ValueError;
    }
    this._balance = this._balance + value;
  }
  withdraw(value) {
    if (!this._isOpen) {
      throw ValueError;
    }
    if (this._balance < value) {
      throw ValueError;
    }
    if (value < 0) {
      throw ValueError;
    }
    this._balance = this._balance - value;
  }
}

class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
