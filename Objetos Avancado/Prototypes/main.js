//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // No caso de mais métodos linkados, primeiro o JavaScript vai olhar dentro do próprio objeto para depois olhar para a cadeia de prototypes.
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // Essa maneira não é performática, no caso é melhor criar um método a partir do Prototype
}

//Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
} 


//instância
const pessoa1 = new Pessoa('Paulo', 'Santana') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Rannah', 'Dantas') // <- Pessoa = Função construtora
//Aqui temos uma cadeia: data -> Date.prototype -> Object.prototype
const data = new Date() // exemplo de instância de função construtora. Onde você chama metodos no objeto date

console.dir(pessoa1.nomeCompleto());
console.dir(data);