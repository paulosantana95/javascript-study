const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
const novo = nomes;
novo.pop();
console.log(nomes);



// Outra maneira de declarar Array é pelo construtor, declarando o tipo de dado que vai ser ultilizado.

// const nomes = new Array('João', 'Maria');