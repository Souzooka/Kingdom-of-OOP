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
    return this._uniCellular;
  }

  set uniCellular(uniCellular) {
    if (typeof uniCellular !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._uniCellular = uniCellular;
  }

  get multiCeullar() {
    return !this._uniCellular;
  }

  set multiCeullar(multiCeullar) {
    if (typeof multiCeullar !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._uniCellular = !multiCeullar;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(eukaryote) {
    if (typeof eukaryote !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._trueNucleus = eukaryote;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(prokaryote) {
    if (typeof prokaryote !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._trueNucleus = !prokaryote;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(anaerobic) {
    if (typeof anaerobic !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._anaerobic = anaerobic;
  }

  get aerobic() {
    return !this._aerobic;
  }

  set aerobic(aerobic) {
    if (typeof aerobic !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._aerobic = !aerobic;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(asexual) {
    if (typeof asexual !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._asexual = asexual;
  }

  get sexual() { // ( ͡° ͜ʖ ͡°)
    return !this._asexual;
  }

  set sexual(sexual) {
    if (typeof sexual !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._asexual = !sexual;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(mobile) {
    if (typeof mobile !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._mobile = mobile;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(immobile) {
    if (typeof immobile !== 'boolean') {
      throw new TypeError('Only boolean values be assigned');
    }
    this._mobile = !immobile;
  }
}

module.exports = LivingThing;