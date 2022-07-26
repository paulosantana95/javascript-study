// Class vs Constructor function
//Class
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

// constructor
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Paulo', 'Santana');
console.log(p1);

const p2 = new Pessoa2('Francisco', 'Santana');
console.log(p2)