document.addEventListener('DOMContentLoaded', () =>{
   
    let task = JSON.parse(localStorage.getItem('tasks')) || [];
    task.forEach((t) => renderTask(t));

function handleCheckboxChange(event){
    const taskItem = event.target.parentElement;
    if(event.target.checked){
        taskItem.classList.add('task-completed');
    }else{
        taskItem.classList.remove('task-completed');
    }
}
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
})
document.getElementById('addTaskBtn').addEventListener('click', function() {
   console.log('hi');
   
    const newTaskText = prompt('Enter new task');
    const taskList = document.getElementById('taskLists')
    
    if(newTaskText){
        let newItem = document.createElement('li');
        newItem.innerHTML = `<input type ="checkbox" class="checkbox"> ${newTaskText}`;
        taskList.appendChild(newItem);

        const newCheckBox = newItem.querySelector('.checkbox');
        newCheckBox.addEventListener('change', handleCheckboxChange)
        task.push(newTaskText);
        saveTasks();
    }
})

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(task))
}
function renderTask(task){
    console.log(task);
    let newItem = document.createElement('li');
    const taskList = document.getElementById('taskLists')    
    newItem.innerHTML = `<input type ="checkbox" class="checkbox"> ${task}`;
        taskList.appendChild(newItem);
    
}


document.getElementById('deleteTaskBtn').addEventListener('click', function(){
    const tasks = document.getElementById('taskLists');
    const lastElem = tasks.lastElementChild;

    if(task){
        lastElem.remove();
        task.pop();
        saveTasks();
    } 
   else{
    alert("yay! you are done with today's task!")
   }
})
})