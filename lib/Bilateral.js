const Animal = require('./Animal.js');

class Bilaterial extends Animal {
  constructor(name, body) {
    super(name, 'bilaterial');
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(body) {
    if (typeof body !== 'string') {
      throw new TypeError('Only string values be assigned');
    }
    this._body = body;
  }
}

module.exports = Bilaterial;