import{addNewTask, amendTask, toggleComplete, toggleFormElements, deleteTask, projectList, addNewProject, removeProject} from './app';
import { showTasks } from './display';

let setEventListeners = function(){
    document.addEventListener('submit', function(event){
        if(event.target.id==='newProjectForm'){
            event.preventDefault();
            addNewProject(event.target[0].value);
            event.target[0].value='';
        }
    });
    document.addEventListener('click', function(event){
        if(event.target.classList.contains('closeProject')){
            let target = event.target.getAttribute('data-target');
            removeProject(target);
        }
    });

    document.addEventListener('submit', function(event){
        if(event.target.classList.contains('newTaskForm')){
            event.preventDefault();
            let projectIndex = event.target.parentNode.getAttribute('data-index');
            addNewTask(projectIndex, event.target.elements.title.value, event.target.elements.description.value, event.target.elements.priority.value, event.target.elements.dueDate.value)
        }
    });

    document.addEventListener('click', function(event){
        if(event.target.classList.contains('editTask')){
            event.preventDefault();
            let taskForm = event.target.closest('form');
            if(event.target.parentNode.hasAttribute('active')){
                let projectIndex = event.target.parentNode.getAttribute('data-projectIndex');
                let taskIndex = event.target.parentNode.getAttribute('data-taskIndex');
                amendTask(projectIndex, taskIndex, taskForm.elements.title.value, taskForm.elements.description.value, taskForm.elements.priority.value, taskForm.elements.dueDate.value)
                event.target.textContent='Edit Task';
                event.target.parentNode.querySelector('.deleteTask').textContent='Delete Task';
            }
            else{
                event.target.textContent='Save changes';
                event.target.parentNode.querySelector('.deleteTask').textContent='Cancel';
            }
            toggleFormElements(taskForm)
            event.target.parentNode.toggleAttribute('active')
        }
    });

    document.addEventListener('click', function(event){
        if(event.target.classList.contains('deleteTask')){
            event.preventDefault();
            let taskForm = event.target.closest('form');
            let projectIndex = event.target.parentNode.getAttribute('data-projectIndex');
            let taskIndex = event.target.parentNode.getAttribute('data-taskIndex');
            if(event.target.parentNode.hasAttribute('active')){
                showTasks(projectList[projectIndex]);
            }
            else{
                deleteTask(projectIndex, taskIndex);
            }
            toggleFormElements(taskForm)
            event.target.parentNode.toggleAttribute('active')
        }
    })

    document.addEventListener('click', function(event){
        if(event.target.classList.contains('toggleComplete')){
            let projectIndex = event.target.parentNode.getAttribute('data-projectIndex');
            let taskIndex = event.target.parentNode.getAttribute('data-taskIndex');
            toggleComplete(projectIndex,taskIndex);
        }
    })

}();

export {setEventListeners}

