const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Paulo' },
  { id: 1, nome: 'Joaquim' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoas };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas)