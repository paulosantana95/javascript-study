/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// spread operator espalha e copia o array ou objeto.

const produto = {nome: 'Caneca', preco: 1.8};
// const camisa = {...produto, material: 'Algodão'};
//outra maneira (spread é mais intuitivo)
const camisa  = Object.assign({}, produto, {material: 'Algodão'});

camisa.nome = 'Camiseta';
camisa.preco = 30;

//Diferente do Object.keys, aqui se pega somente os valores.
// console.log(Object.values(produto));

//Object entries trás propriedades com arrays internos
// console.log(Object.entries(produto));


//Object Keys = Define a chaves do objeto.
// console.log(Object.keys(produto));
//outra maneira
// for(let entry of Object.entries(produto)) {
//   console.log(entry);
// }

// desestruturando dentro do for
// for(let [chave, valor] of Object.entries(produto)) {
//   console.log(chave, valor);
// }
//trazendo a possibilidade de fazer uma desestruturação de arrays


//usa-se para alterar as propriedades e obter as propriedades.
// Object.defineProperty(produto, 'nome', {
//   writable: false,
//   configurable: false,
//   value: 'Qualquer coisa'
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
