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

button.addEventListener('click', ()=>{
   const nomeDaTarefa = input.value;
   const tarefas = document.querySelector('div.tarefas');

   if (nomeDaTarefa === '' || nomeDaTarefa.length === 0) {
      input.classList.add('error');
   } else {
      input.classList.remove('error');
      // Criação dos elementos
      const tarefa = document.createElement('div');
      const p = document.createElement('p');
      const divIcons = document.createElement('div');
      const iconCheck = document.createElement('i');
      const iconTrash = document.createElement('i');

      tarefa.classList.add('tarefa');

      p.innerHTML = nomeDaTarefa;

      divIcons.classList.add('icons');

      iconCheck.classList.add('fa-solid');
      iconCheck.classList.add('fa-check');
      iconTrash.classList.add('fa-solid');
      iconTrash.classList.add('fa-trash');

      iconCheck.addEventListener('click', checked);
      iconTrash.addEventListener('click', trashed);

      divIcons.appendChild(iconCheck);
      divIcons.appendChild(iconTrash);
      tarefa.appendChild(p);
      tarefa.appendChild(divIcons);
      tarefas.appendChild(tarefa);

      // Clear and select input
      input.value='';
      input.select();
   }
});