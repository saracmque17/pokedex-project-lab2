const Pokenea = require('../models/pokenea');

class PokeneaInstantiator {
  static instantiatePokeneas(data, array) {
  data.forEach(item => {
    const pokenea = new Pokenea(item);
    array.push(pokenea);
  });
}
}

module.exports = PokeneaInstantiator;