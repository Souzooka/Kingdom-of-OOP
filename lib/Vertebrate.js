const Bilateral = require('./Bilateral.js');

class Vertebrate extends Bilateral {
  constructor(name) {
    super(name, 'vertebral-column');
  }
}

module.exports = Vertebrate;