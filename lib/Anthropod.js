const Bilateral = require('./Bilateral.js');

class Anthropod extends Bilateral {
  constructor(name) {
    super(name, 'exoskeleton');
  }
}

module.exports = Anthropod;