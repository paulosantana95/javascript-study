// Superclasse | Classe mãe ou pai
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente | SALDO TOTAL: R$${this.saldo}`)
    return
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(`Ag.: ${this.agencia} / Num.:${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

const conta1 = new Conta(11, 22222, 10);

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente | SALDO TOTAL: R$${this.saldo}`);
    return
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc = new CC(112, 1291892, 0 , 100);
// cc.depositar(10);
// cc.sacar(120);

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(123, 123, 10)
cp.depositar(10);
cp.sacar(120);

