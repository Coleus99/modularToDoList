import {showProjects, showTasks} from './display'

// Task constructor function
function task(title, description, priority, dueDate){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
}

let projectList = JSON.parse(localStorage.getItem('myToDoLists')) || [];

function addNewProject(name){
    projectList.push(new project(name));
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showProjects();
}

function removeProject(projectIndex){
    projectList.splice(projectIndex,1)
    // projectList = projectList.filter(obj => {
    //     return obj.name!==name;
    // });
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showProjects();
}

function addNewTask(projectIndex, title, description, priority, dueDate){
    projectList[projectIndex].taskList.push(new task(title, description, priority, dueDate));
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showTasks(projectList[projectIndex]);
}

function toggleFormElements(form) { 
    var inputs = form.querySelectorAll("input,select,textarea"); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].disabled = !inputs[i].disabled;
        inputs[i].classList.toggle('form-control-plaintext');
        inputs[i].classList.toggle('form-control');
    } 
}

function amendTask(projectIndex, taskIndex, newTitle, newDescription, newPriority, newDueDate){
    Object.assign(projectList[projectIndex].taskList[taskIndex], {
        title: newTitle, 
        description: newDescription, 
        priority: newPriority, 
        dueDate: newDueDate
    });
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showTasks(projectList[projectIndex]);
}

function deleteTask(projectIndex,taskIndex){
    projectList[projectIndex].taskList.splice(taskIndex, 1);
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showTasks(projectList[projectIndex]);
}

function toggleComplete(projectIndex,taskIndex){
    projectList[projectIndex].taskList[taskIndex].completed = !projectList[projectIndex].taskList[taskIndex].completed;
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    console.log(projectList[projectIndex].taskList[taskIndex])
}

// Project constructor function
function project(name){
    this.name = name;
    this.taskList = [];
}

export {
    task,
    addNewProject,
    removeProject,
    addNewTask,
    toggleFormElements,
    amendTask,
    deleteTask,
    toggleComplete,
    project,
    projectList
}