const Eukaryota = require('./Eukaryota.js');

class Plant extends Eukaryota {
  constructor(name) {
    super(name, false, true, false, false);
  }
}

module.exports = Plant;