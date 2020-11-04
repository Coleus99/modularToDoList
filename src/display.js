import{projectList} from './app'

let showProjects = function(){
    let projectsWrapper = document.querySelector('.projectsWrapper');
    projectsWrapper.innerHTML='';
    projectList.forEach(project => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project','card', 'my-2');
        projectCard.innerHTML = `
            <div class="card-header d-flex justify-content-between">
                <span>${project.name}</span>
                <button type="button" class="close" aria-label="Close">
                    <span class="closeProject" data-target="${project.name}" aria-hidden="true">&times;</span>
                </button>
            </div>
            <ul class="list-group list-group-flush" id="${project.name}">
                <p>No tasks yet! Add one below</p>
            </ul>
            <button class="addTask">Add Task</button>
        `;
        projectsWrapper.appendChild(projectCard);
    })
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

export{showProjects, showTasks}