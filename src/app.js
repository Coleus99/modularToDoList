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

let projectList = JSON.parse(sessionStorage.getItem('myToDoLists')) || [];

function addNewProject(name){
    projectList.push(new project(name));
    sessionStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showProjects();
}

function removeProject(name){
    projectList = projectList.filter(obj => {
        return obj.name!==name;
    });
    sessionStorage.setItem('myToDoLists', JSON.stringify(projectList));
    showProjects();
}

// Project constructor function
function project(name){
    this.name = name;
    this.taskList = [];
    this.addTask = function(title, description, priority, dueDate){
        this.taskList.push(new task(title, description, priority, dueDate));
        showTasks(this);
    };
    this.deleteTask = function(title){
        let taskIndex = this.taskList.findIndex(item => item.title=== title);
        this.taskList.splice(taskIndex, 1);
        showTasks(this);
    };
}

export {
    task,
    addNewProject,
    removeProject,
    project,
    projectList
}