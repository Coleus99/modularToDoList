import{addNewProject} from './app';
import{pageLoad} from './template';
import {showProjects, showTasks} from './display';
import{setEventListeners} from './input'

if(localStorage.getItem('myToDoLists')===null){
    addNewProject('My First List');
}
else{
    showProjects();
}
