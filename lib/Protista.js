const Eukaryota = require('./Eukaryota.js');

class Protista extends Eukaryota {
  constructor(name, uniCeullar, mobile, heterotroph) {
    super(name, uniCeullar, true, mobile, heterotroph);
  }
}

module.exports = Protista;