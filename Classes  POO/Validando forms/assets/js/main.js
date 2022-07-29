class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.checkValidFields();
    const validPassword = this.checkValidPassword();

    if(validFields && validPassword) {
      alert('Formulário enviado com sucesso!');
      this.formulario.submit();
    }
  }

  checkValidPassword() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.createError(senha,'As senhas devem ser iguais.' );
      this.createError(repetirSenha,'As senhas devem ser iguais.' );
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.createError(senha,'A senha deve ter entre 6 e 12 caracteres.');
    }

    return valid;
  }

  checkValidFields() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let input of this.formulario.querySelectorAll('.validate')) {
      const label = input.previousElementSibling.innerHTML;
      if(!input.value) {
        this.createError(input, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if(input.classList.contains('cpf')) {
        if(!this.validaCPF(input)) valid = false;
      }

      if(input.classList.contains('usuario')) {
        if(!this.validaUsuario(input)) valid = false;
      }

    }

    return valid;
  }

  validaUsuario(input) {
    const usuario = input.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.createError(input, 'Usuário inválido. Seu nome de usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(input, 'Nome de usuário precisa conter apenas letras e/ou números.');
      valid = false;
    }
    return true;
  }

  validaCPF(input) {
    const cpf = new ValidaCPF(input.value);

    if(!cpf.valida()) {
      this.createError(input, 'CPF inválido.')
      return false;
    }

    return true;
  }

  createError(input, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    input.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();