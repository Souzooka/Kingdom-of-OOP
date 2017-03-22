let LivingThing = require('./LivingThing.js');

class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(heterotroph) {
    if (typeof heterotroph !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._heterotroph = heterotroph;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph(autotroph) {
    if (typeof autotroph !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._heterotroph = !autotroph;
  }
}

module.exports = Eukaryota;