let Eukaryota = require('./Eukaryota.js');

class Fungi extends Eukaryota {
  constructor(name) {
    super(name, false, true, false, true);
  }
}

module.exports = Fungi;