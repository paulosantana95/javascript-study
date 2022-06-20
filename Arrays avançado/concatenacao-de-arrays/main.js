const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
// ... -> spread operator / Funcionam como rest operator e na desestruturação.
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3);


//o mesmo funciona com objetos.

