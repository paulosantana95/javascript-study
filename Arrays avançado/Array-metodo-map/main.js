// Método map
// Dobrando os numeros com o map.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8 , 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

//Para cada elemento
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

// Adicione uma chave id em cada objeto(id)
const pessoas =  [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// const comIds = pessoas.map(function(obj, indice) {
//   obj.id = (indice + 1) * 72;
//   return obj;
// });
// console.log(comIds);

// usando com spread e criar um novo objeto dentro do map para não afetar o original.
const ids = pessoas.map(function(obj, indice) {
  const newObj = {...obj}
  newObj.id = indice;
  return newObj;
});
console.log(ids);

const nomes = pessoas.map(obj => obj.nome);
//Ou você pode deletar a chave nome do objeto
// const idades = pessoas.map(function(obj) {
//   delete obj.nome;
//   return obj
// }); 
// Ou mapear apenas a idade colocando em um objeto usando uma anonymous function
// const idades = pessoas.map(function(obj) {
//   return {idade: obj.idade};
// });
// Ou com função anonima
const idades = pessoas.map(obj => ({idade: obj.idade}));

// console.log(idades);