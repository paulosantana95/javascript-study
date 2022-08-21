const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

// maneiras de importar
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falanNome = falaNome;


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exmportar';

// console.log(exports)