const Bilaterial = require('./Bilateral.js');

class Mollusk extends Bilaterial {
  constructor(name) {
    super(name, 'soft-bodied');
  }
}

module.exports = Mollusk;