'use strict';

class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Only strings can be assigned');
    }
    this._name = name;
  }

  get uniCellular() {
    return this._name;
  }

  set uniCellular(uniCellular) {
    if (typeof uniCellular !== 'string') {
      throw new TypeError('Only strings can be assigned');
    }
    this._uniCellular = uniCellular;
  }
}

module.exports = LivingThing;