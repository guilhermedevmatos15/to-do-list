const input = document.querySelector('input');
const button = document.querySelector('button');
let iconsCheck=[];
let iconsTrash=[];

// iconsCheck.map((element)=>{
//    element.addEventListener('click', (evt)=>{
//       console.log(evt)
//    });
// });

function checked(evt) {
   const tarefa = evt.target.parentElement.parentElement;
   console.log(tarefa)
   tarefa.classList.toggle('checked');
}
function trashed(evt) {
   const tarefa = evt.target.parentElement.parentElement;
   const tarefas = tarefa.parentElement;
   tarefas.removeChild(tarefa);
}

button.addEventListener('click', ()=>{
   const nomeDaTarefa = input.value;
   const tarefas = document.querySelector('div.tarefas');

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
   iconCheck.addEventListener('click', checked);
   iconTrash.classList.add('fa-solid');
   iconTrash.classList.add('fa-trash');
   iconTrash.addEventListener('click', trashed);

   divIcons.appendChild(iconCheck);
   divIcons.appendChild(iconTrash);
   tarefa.appendChild(p);
   tarefa.appendChild(divIcons);
   tarefas.appendChild(tarefa);

   // iconsCheck.push(iconCheck);
   // iconsTrash.push(iconTrash);

   // iconsCheck.map((element)=>{
   //    element.addEventListener('click', checked);
   // });
   // iconsTrash.map((element)=>{
   //    element.addEventListener('click', trashed);
   // });
   
});