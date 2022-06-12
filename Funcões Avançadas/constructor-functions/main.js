// Funcao construtora retorna -> objetos
// Funcao fabrica -> objetos

// Na funcao factory -> criaPessoa
// Na funcao construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Aqui sao metodos privados usados somente dentro da funcao
    const id = 123456;
    const metodoInterno = () => {

    };


    //this sao atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome; 
}

const p1 = new Pessoa('Paulo', 'Santana');

console.log(p1.nome);