//declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
};

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
    console.log('sou um dado.');
};
souUmDado();
// trazer uma função como parametro.
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
};
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () =>  {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto

const objeto = {
    falar() {
        console.log('Estou falando...');
    }
};
objeto.falar();