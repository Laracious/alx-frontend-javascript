import util from 'util';
/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') throw new Error('Code must be a string');
    this._code = code;
  }

  [util.inspect.custom]() {
    return `Airport [${this.code}] { _name: '${this.name}', _code: '${this.code}' }`;
  }
}
