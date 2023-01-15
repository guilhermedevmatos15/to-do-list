const input = document.querySelector('input');
const button = document.querySelector('button');

function checked(e) {
   const tarefa = e.target.parentElement.parentElement;
   console.log(tarefa)
   tarefa.classList.toggle('checked');
}
function trashed(e) {
   const tarefa = e.target.parentElement.parentElement;
   const tarefas = tarefa.parentElement;
   tarefas.removeChild(tarefa);
}
function criarTarefa(name) {
   const tarefas = document.querySelector('div.tarefas');
   const tarefa = document.createElement('div');
   tarefa.classList.add('tarefa');
   
   const p = document.createElement('p');
   p.innerHTML = name;
   
   const divIcons = document.createElement('div');
   divIcons.classList.add('icons');
   
   const iconCheck = document.createElement('i');
   const iconTrash = document.createElement('i');
   iconCheck.classList.add('fa-solid');
   iconCheck.classList.add('fa-check');
   iconCheck.addEventListener('click', checked);
   iconTrash.classList.add('fa-solid');
   iconTrash.classList.add('fa-trash');
   iconTrash.addEventListener('click', trashed);

   divIcons.appendChild(iconCheck);
   divIcons.appendChild(iconTrash);
   tarefa.appendChild(p);
   tarefa.appendChild(divIcons);
   tarefas.appendChild(tarefa);
}


button.addEventListener('click', ()=>{
   const nomeDaTarefa = input.value;
   if (nomeDaTarefa === '' || nomeDaTarefa.length === 0) {
      input.classList.add('error');
   } else {
      input.classList.remove('error');
      criarTarefa(nomeDaTarefa);

      // Clear and select input
      input.value='';
      input.select();
   }
});