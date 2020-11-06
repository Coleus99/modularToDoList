import{projectList} from './app'
import datepicker from '../node_modules/js-datepicker'

let showProjects = function(){
    let projectsWrapper = document.querySelector('.projectsWrapper');
    projectsWrapper.innerHTML='';
    projectList.forEach(project => {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project','card', 'my-2');
        projectCard.setAttribute('data-projectIndex', `${projectList.indexOf(project)}`);
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
            <form class="newTaskForm">
                <div class="form-row">
                    <div class="form-group mb-2 col-md-6">
                        <input name="title" type="text" class="form-control taskName" placeholder="Task Name">
                    </div>
                    <div class="form-group mb-2 col-md-3">
                        <select name="priority" class="form-control-plaintext prioritySelect">
                            <option>High Priority</option>
                            <option selected>Medium Priority</option>
                            <option>Low Priority</option>
                        </select>
                    </div>
                    <div class="form-group mb-2 col-md-3">
                        <input name="dueDate" type="text" class="form-control dueDate" placeholder="Due Date">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2 col-md-9">
                        <textarea name="description" class="form-control description" id="exampleFormControlTextarea1" rows="1" placeholder="Description"></textarea>
                    </div>
                    <div class="form-group mb-2 col-md-3">
                        <button type="submit" class="btn btn-primary mb-2 addTask">Add Task</button>
                    </div>
                </div>
            </form>
        `;
        projectsWrapper.appendChild(projectCard);
        showTasks(project);
        const picker = datepicker('.dueDate')
    })
}

let showTasks = function(project){
    let listGroup = document.getElementById(project.name);
    listGroup.innerHTML='';
    project.taskList.forEach(task => {
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.setAttribute('data-taskIndex', `${project.taskList.indexOf(task)}`);
        listItem.setAttribute('data-projectIndex',`${projectList.indexOf(project)}` );
        listItem.setAttribute('priority',task.priority);
        listItem.setAttribute('completed',task.completed);
        listItem.innerHTML=`
        <input name="status" class="form-check-input m-0 taskEditor toggleComplete" type="checkbox" ${task.completed?'checked':''}>
        <form>
            <div class="form-row">
                    <div class="form-group mb-2 col-md-1">
                    </div>
                    <div class="form-group mb-2 col-md-6">
                        <input name="title" type="text" disabled class="form-control-plaintext taskName" value="${task.title}">
                    </div>
                    <div class="form-group mb-2 col-md-3">
                        <select name="priority" disabled class="form-control-plaintext prioritySelect">
                            <option ${task.priority==='High Priority'?'selected':''}>High Priority</option>
                            <option ${task.priority==='Medium Priority'?'selected':''}>Medium Priority</option>
                            <option ${task.priority==='Low Priority'?'selected':''}>Low Priority</option>
                        </select>
                    </div>
                    <div class="form-group mb-2 col-md-2">
                        <input name="dueDate" type="text" disabled class="form-control-plaintext dueDate" value="${task.dueDate}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group mb-2 col-md-9">
                        <textarea  name="description" disabled class="form-control-plaintext description" id="exampleFormControlTextarea1" rows="1">${task.description}</textarea>
                    </div>
                    <div class="form-group button-group mb-2 col-md-3" data-projectIndex="${projectList.indexOf(project)}" data-taskIndex="${project.taskList.indexOf(task)}">
                        <button class="btn btn-primary mb-2 taskEditor editTask">Edit Task</button>
                        <button class="btn btn-danger mb-2 taskEditor deleteTask">Delete Task</button>
                    </div>
                </div>
            </form>
        `;
        listGroup.appendChild(listItem);
    })
}

export{showProjects, showTasks}