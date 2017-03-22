const Bilaterial = require('./Bilateral.js');

class Mollusk extends Bilaterial {
  constructor(name) {
    super(name, 'exoskeleton');
  }
}

module.exports = Mollusk;