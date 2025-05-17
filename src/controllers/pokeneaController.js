const pokeneas = require('../data/pokeneas');
const os = require('os');

const getPokeneaJson  = (req, res) => {
  const pokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const containerId = os.hostname();

  const response = {
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    contenedor: containerId
  };

  res.json(response);
};

module.exports = { 
    getPokeneaJson
    //getPokeneaImagen
};
