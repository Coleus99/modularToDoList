import{addNewProject} from './app';
import{pageLoad} from './template';
import {showProjects} from './display';
import{updateEventListeners} from './input'

if(sessionStorage.getItem('myToDoLists')===null){
    addNewProject('My First List');
}
else{
    showProjects();
    updateEventListeners();
}
