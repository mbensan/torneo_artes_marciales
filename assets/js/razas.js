class Personaje {

  constructor (nombre, img, poder, raza) {
    this._nombre = nombre
    this._img = img
    this._poder = parseInt(poder)
    this._raza = raza
  }

  get nombre () {
    return this._nombre
  }

  get img () {
    return this._img
  }

  get poder () {
    return this._poder
  }

  get raza () {
    return this._raza
  }

  set poder (nuevo_poder) {
    this._poder = nuevo_poder
  }
}

export class Saiyajin extends Personaje {

  constructor (nombre, img, poder) {
    super(nombre, img, poder, 'Saiyajin')
  }

  transformacion () {
    this.poder = this.poder * 1.8
  }
}

export class Humano extends Personaje {

  constructor (nombre, img, poder) {
    super(nombre, img, poder, 'Humano')
  }

  coraje () {
    this.poder = this.poder * 1.2
  }
}

const brolli = new Saiyajin('Brolli', 'assasdsa', 300)
const mr_satan = new Humano('Mr. Satán', 'qwefg', 50)
