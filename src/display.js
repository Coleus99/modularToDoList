import{project} from './app'

let showProject = function(name){
    let project = document.createElement('div');
    project.classList.add('project','card', 'my-2');
    project.innerHTML = `
        <div class="card-header">${name}</div>
        <ul class="list-group list-group-flush" id="${name}">
            <p>No tasks yet! Add one below</p>
        </ul>
        <button class="addTask">Add Task</button>
    `;
    let container = document.querySelector('.container');
    container.appendChild(project);
}

let showTasks = function(project){
    console.log(project);
    let listGroup = document.getElementById(project.name);
    listGroup.innerHTML='';
    project.taskList.forEach(task => {
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.setAttribute('priority',task.priority);
        listItem.setAttribute('completed',task.completed);
        listItem.innerHTML=`
            <input class="form-check-input m-0 position-static" type="checkbox" value="" id="defaultCheck1">
            <b>${task.title}</b>
            <span class="description">${task.description}</span>
            <span>🕢${task.dueDate}</span>
        `;
        listGroup.appendChild(listItem);
    })
}

export{showProject, showTasks}