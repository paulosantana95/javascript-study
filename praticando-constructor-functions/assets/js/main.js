function Calculadora() {
  this.display = document.querySelector('.display');

  this.capturaCliques = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.btnParaDisplay(el);

      if(el.classList.contains('btn-clear')) this.clearDisplay();

      if (el.classList.contains('btn-del')) this.apagaUm();

      if (el.classList.contains('btn-eql')) this.realizaConta();
    });
  }

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  }

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode !== 13) return;
      this.realizaConta();
    });
  }

  this.btnParaDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  }

  this.clearDisplay = () => this.display.value = '';

  this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
  
  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert('Conta invalida');
        return
      };

      this.display.value = conta;
    } catch (e) {
      alert('Conta vinalida');
      this.clearDisplay();
      return
    }

  };
}

const calculadora = new Calculadora();
calculadora.inicia();