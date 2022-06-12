// Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        fala: function(assunto = 'Falando sobre Nada') {
            console.log()
            return `${nome} está falando ${assunto}.`
        },
        altura: altura,
        peso: peso,
        imc() {
            const indice = this.peso /(this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Paulo Everton Santana';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc());
console.log(p1.nomeCompleto);
console.log(p1.fala());


