// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    // value: estoque,
    // writable: true,
    configurable: true,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Erro. Necessário que o valor seja um number')
      }

      estoque = valor
    }
  });
}

const p1 = new Produto ('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1);
console.log(p1.estoque);