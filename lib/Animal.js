const Eukaryota = require('./Eukaryota.js');

class Animal extends Eukaryota {
  constructor(name, symmetry) {
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;
  }

  set symmetry(symmetry) {
    if (typeof symmetry !== 'string') {
      throw new TypeError('Only string values be assigned');
    }
    this._symmetry = symmetry;
  }
}

module.exports = Animal;