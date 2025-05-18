class Pokenea {
  constructor({ id, nombre, altura, habilidad, imagen, frase }) {
    this._id = id;
    this._nombre = nombre;
    this._altura = altura;
    this._habilidad = habilidad;
    this._imagen = imagen;
    this._frase = frase;
  }

  getId() { return this._id; }
  getName() { return this._nombre; }
  getHeight() { return this._altura; }
  getAbility() { return this._habilidad; }
  getImage() { return this._imagen; }
  getPhilosophicalPhrase() { return this._frase; }
}

module.exports = Pokenea;