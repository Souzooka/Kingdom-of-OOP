let LivingThing = require('./LivingThing.js');

class Bacteria extends LivingThing {
  constructor(name) {
    super(name, true, false, false, true, false);
  }
}

module.export = Bacteria;