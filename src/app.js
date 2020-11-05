import {showProjects, showTasks} from './display'

// Task constructor function
function task(title, description, priority, dueDate){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
    this.amend = function(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
    this.toggleComplete = function(){
        this.completed = !this.completed;
    }
}

let projectList = JSON.parse(localStorage.getItem('myToDoLists')) || [];

function addNewProject(name){
    projectList.push(new project(name));
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showProjects();
}

function removeProject(name){
    projectList = projectList.filter(obj => {
        return obj.name!==name;
    });
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showProjects();
}

function addNewTask(projectIndex, title, description, priority, dueDate){
    projectList[projectIndex].taskList.push(new task(title, description, priority, dueDate));
    localStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showTasks(projectList[projectIndex]);
}

// function deleteTask(projectIndex,taskIndex){
//     projectList[projectIndex].taskList.splice(taskIndex, 1);
//     showTasks(projectList[projectIndex]);
// }

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
    project,
    projectList
}