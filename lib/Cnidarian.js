const Animal = require('./Animal.js');

class Cnidarian extends Animal {
  constructor(name) {
    super(name, 'radial');
  }
}

module.exports = Cnidarian;