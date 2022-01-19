document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let inputTask = e.target.querySelector('#new-task-description').value;

    buildTask(inputTask);
  })

});

function buildTask(task){
  let nameTask = document.createElement('p');
  let btn = document.createElement('button');
  let optionPriority = document.getElementById('priority options');

  nameTask.textContent = `${task} `;
  btn.textContent = 'x';
  let priority = optionPriority.options[optionPriority.selectedIndex].value;
  //console.log(priority);

  switch(priority){
    case 'high':
      nameTask.style.color = "red";
      break;
    case 'medium':
      nameTask.style.color = "orange";
      break;
    case 'low':
    default:
      nameTask.style.color = "seagreen";
    break;
  }
  


  btn.addEventListener('click', deleteTask);
  nameTask.append(btn);
  //console.log(nameTask);

  document.querySelector('#tasks').appendChild(nameTask);

}

function deleteTask(e){
  e.target.parentNode.remove();
}
