// retorno da função é dado pelo 'return'
// através do 'return' é retornado um valor e a função termina
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2));


//aqui não há retorno.
function soma2 (a, b) {
    console.log(a, b);
}
soma2(5, 2);

//maneiras de retornar valores.
function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
}

const p1 = criaPessoa( 'Luiz', 'Otávio' );
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log( p1 );
console.log( p2 );


//funcao estilo boneca russa, uma função com parametro que chama outra função dentro com um retorno de ambos os parametros
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo('mundo!'));