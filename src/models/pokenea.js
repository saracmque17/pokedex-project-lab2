class Pokenea {
  constructor({ id, name, height, ability, image, phrase }) {
    this._id = id;
    this._name = name;
    this._height = height;
    this._ability = ability;
    this._image = image;
    this._phrase = phrase;
  }

  getId() { return this._id; }
  getName() { return this._name; }
  getHeight() { return this._height; }
  getAbility() { return this._ability; }
  getImage() { return this._image; }
  getPhilosophicalPhrase() { return this._phrase; }
}

module.exports = Pokenea;