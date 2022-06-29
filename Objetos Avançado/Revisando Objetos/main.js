// literal de uma string ''  "" ``
// Array []
// Construção do objeto é através das chaves = {}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}

// const chave = 'sobrenome';
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa.sobrenome);
// console.log(pessoa['sobrenome']);
// console.log(pessoa[chave]);


//Outra forma de declarar um objeto(construtor);
const pessoa1 = new Object();
pessoa1.nome = 'Paulo';
pessoa1.sobrenome = 'Santana';
pessoa1.idade = 27;
pessoa1.falarNome = function() {
  return (this.nome);
}
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

// pessoa1.falarNome();
// delete pessoa1.nome;
// console.log(pessoa1)

// Se for um objeto que eu preciso criar frequentemente é melhor criar um molde para se criar esses objetos.
// Usa-se factory functions / Constructor Functions// classes 

