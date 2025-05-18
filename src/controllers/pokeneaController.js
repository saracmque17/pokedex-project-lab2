const os = require('os');
const Pokenea = require('../models/pokenea');
const pokeneasData = require('../data/pokeneas');
const PokeneaInstantiator = require('../utils/instantiator');

const pokeneasArray = [];
PokeneaInstantiator.instantiatePokeneas(pokeneasData, pokeneasArray);

const getRandomPokenea = (pokeneas) => {
  return pokeneas[Math.floor(Math.random() * pokeneas.length)];
};

const pokeneaController = {
  showJsonPokenea: (req, res) => {
    try {
      const pokenea = getRandomPokenea(pokeneasArray);
      const response = {
        id: pokenea.getId(),
        name: pokenea.getName(),
        height: pokenea.getHeight(),
        ability: pokenea.getAbility(),
        containerId: os.hostname()
      };
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  showImagePokenea: (req, res) => {
  try {
    const pokenea = getRandomPokenea(pokeneasArray);

    res.render('pokenea/image', {
      pokenea: { 
        name: pokenea.getName(),
        image: pokenea.getImage(),
        phrase: pokenea.getPhilosophicalPhrase()
      },
      containerId: os.hostname()
    });
  } catch (error) {
    console.error('Error rendering image:', error);
    res.status(500).send('Error loading image');
  }
},

  homePage: (req, res) => {
    res.render('index', {
      viewData: { message: "Hello, welcome to the Pokenea application!" }
    });
  }
};

module.exports = pokeneaController;