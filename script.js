let AddTask = document.querySelector("#AddTask");
let btnaddtask = document.querySelector("#btnaddtask");
let listaTarefas = document.querySelector("#listaTarefas");

AddTask.addEventListener('keypress', (e) => {

  if (e.keyCod == 13) {
    let tarefa = {
      nome: AddTask.value,
      id: gerarId(),
    }
    adicionarTarefa(tarefa);
  }
});

btnaddtask.addEventListener('click', (e) => {

  let tarefa = {
    nome: AddTask.value,
    id: gerarId(),
  }
  adicionarTarefa(tarefa);
});




function gerarId() {
  return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {

  let li = criarTag(tarefa);
  listaTarefas.appendChild(li);
  AddTask.value = '';
}

function criarTag(tarefa) {

  let li = document.createElement('li');
  li.id = tarefa.id;
  let span = document.createElement('span');
  span.classList.add('textoTarefa');
  span.innerHTML = tarefa.nome;

  let div = document.createElement('div');

  let btnEditar = document.createElement('checkbox');
  btnEditar.classList.add('btnAcao');
  btnEditar.innerHTML = '<input type="checkbox"></input>';
  btnEditar.setAttribute('checkbox', 'editar(' + tarefa.id + ')');

  let btnExcluir = document.createElement('button');
  btnExcluir.classList.add('btnAcao');
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')')

  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}

function excluir(idTarefa) {
  let confirmacao = window.confirm("Deseja excluir esta tarefa?");
  if (confirmacao) {
    let li = document.getElementById('' + idTarefa + '');
    if (li) {
      listaTarefas.removeChild(li);
    }
  }
}



//////////////////////////////////////////////////////////////////////////

let AddTask2 = document.querySelector("#AddTask2");
let btnaddtask2 = document.querySelector("#btnaddtask2");
let listaTarefas2 = document.querySelector("#listaTarefas2");

AddTask2.addEventListener('keypress', (e2) => {

  if (e2.keyCod == 13) {
    let tarefa2 = {
      nome: AddTask2.value,
      id: gerarId2(),
    }
    adicionarTarefa2(tarefa2);
  }
});

btnaddtask2.addEventListener('click', (e2) => {

  let tarefa2 = {
    nome: AddTask2.value,
    id: gerarId2(),
  }
  adicionarTarefa2(tarefa2);
});




function gerarId2() {
  return Math.floor(Math.random() * 3000);
}

function adicionarTarefa2(tarefa2) {

  let li2 = criarTag2(tarefa2);
  listaTarefas2.appendChild(li2);
  AddTask2.value = '';
}

function criarTag2(tarefa2) {

  let li2 = document.createElement('li2');
  li2.id = tarefa2.id;
  let span2 = document.createElement('span2');
  span2.classList.add('textoTarefa2');
  span2.innerHTML = tarefa2.nome;

  let div2 = document.createElement('div2');

  let btnEditar2 = document.createElement('checkbox');
  btnEditar2.classList.add('btnAcao2');
  btnEditar2.innerHTML = '<input type="checkbox"></input>';
  btnEditar2.setAttribute('checkbox', 'editar(' + tarefa2.id + ')');

  let btnExcluir2 = document.createElement('button');
  btnExcluir2.classList.add('btnAcao');
  btnExcluir2.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir2.setAttribute('onclick', 'excluir(' + tarefa2.id + ')')

  div2.appendChild(btnEditar2);
  div2.appendChild(btnExcluir2);

  li2.appendChild(span2);
  li2.appendChild(div2);
  return li2;
}


function excluir2(idTarefa2) {
  let confirmacao2 = window.confirm("Deseja excluir esta tarefa?");
  if (confirmacao2) {
    let li2 = document.getElementById('' + idTarefa2 + '');
    if (li2) {
      listaTarefas2.removeChild(li2);
    }
  }
}

///////////////////////////////////////////////////////////////////////////

let AddTask1 = document.querySelector("#AddTask1");
let btnaddtask1 = document.querySelector("#btnaddtask1");
let listaTarefas1 = document.querySelector("#listaTarefas1");

AddTask1.addEventListener('keypress', (e1) => {

  if (e1.keyCod == 13) {
    let tarefa1 = {
      nome: AddTask1.value,
      id: gerarId1(),
    }
    adicionarTarefa1(tarefa1);
  }
});

btnaddtask1.addEventListener('click', (e1) => {

  let tarefa1 = {
    nome: AddTask1.value,
    id: gerarId1(),
  }
  adicionarTarefa1(tarefa1);
});




function gerarId1() {
  return Math.floor(Math.random() * 3000);
}

function adicionarTarefa1(tarefa1) {

  let li1 = criarTag1(tarefa1);
  listaTarefas1.appendChild(li1);
  AddTask1.value = '';
}

function criarTag1(tarefa1) {

  let li1 = document.createElement('li1');
  li1.id = tarefa1.id;
  let span1 = document.createElement('span1');
  span1.classList.add('textoTarefa1');
  span1.innerHTML = tarefa1.nome;

  let div1 = document.createElement('div1');

  let btnEditar1 = document.createElement('checkbox');
  btnEditar1.classList.add('btnAcao1');
  btnEditar1.innerHTML = '<input type="checkbox"></input>';
  btnEditar1.setAttribute('checkbox', 'editar(' + tarefa1.id + ')');

  let btnExcluir1 = document.createElement('button');
  btnExcluir1.classList.add('btnAcao');
  btnExcluir1.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir1.setAttribute('onclick', 'excluir(' + tarefa1.id + ')')

  div1.appendChild(btnEditar1);
  div1.appendChild(btnExcluir1);

  li1.appendChild(span1);
  li1.appendChild(div1);
  return li1;
}


function excluir1(idTarefa1) {
  let confirmacao1 = window.confirm("Deseja excluir esta tarefa?");
  if (confirmacao1) {
    let li1 = document.getElementById('' + idTarefa1 + '');
    if (li1) {
      listaTarefas1.removeChild(li1);
    }
  }
}
