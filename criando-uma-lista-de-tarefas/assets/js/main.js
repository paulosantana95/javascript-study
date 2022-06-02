const inputTarefa =  document.querySelector('.input-tarefa');
const btnTarefa =  document.querySelector('.btn-tarefa');
const tarefas =  document.querySelector('.tarefas');

function criaLista() {
  const lista = document.createElement('li');
  return lista;
}

function criaBotaoApagar (list) {
  list.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar')
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'Apagar esta tarefa')
  list.appendChild(botaoApagar);
}

function criaTarefa(novaTarefa) {
  const lista = criaLista();
  lista.innerText = novaTarefa;
  tarefas.appendChild(lista);
  limpaInput();
  criaBotaoApagar(lista);
  salvarTarefas();
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

//adição de tarefa
inputTarefa.addEventListener('keypress', function (e) {
  if(e.keyCode === 13) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
})

btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

//remove tarefas / rastreio do botao apagar
document.addEventListener('click', function(e) {
  const element = e.target;
  
  if(element.classList.contains('apagar')) {
    element.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
    //conversão das tarefas em um JSON com strings e salvar tarefas no localStorage do navegador
  const trefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', trefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  //conversão de volta para objeto javascript(array)
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();