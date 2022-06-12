//escopo léxico, caso a variavel não seja declarada dentro do escopo da função ele irá buscar no escopo acima.

const nome = 'Luiz';

function falaNome() {
    // const nome = 'Paulo'
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome();
}
usaFalaNome();