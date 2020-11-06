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
            if(confirm("This project's tasks will also be deleted. Continue?")){
                let projectIndex = event.target.closest('.project').getAttribute('data-projectIndex');
                removeProject(projectIndex);
            }
        }
    });

    document.addEventListener('submit', function(event){
        if(event.target.classList.contains('newTaskForm')){
            event.preventDefault();
            let projectIndex = event.target.parentNode.getAttribute('data-projectIndex');
            addNewTask(projectIndex, event.target.elements.title.value, event.target.elements.description.value, event.target.elements.priority.value, event.target.elements.dueDate.value)
            event.target.reset();
        }
    });

    document.addEventListener('click', function(event){
        if(event.target.classList.contains('taskEditor')){
            let taskForm = event.target.closest('form');
            let projectIndex = event.target.closest('.list-group-item').getAttribute('data-projectIndex');
            let taskIndex = event.target.closest('.list-group-item').getAttribute('data-taskIndex');

            if(event.target.classList.contains('editTask')){
                event.preventDefault();
                if(taskForm.hasAttribute('active')){
                    amendTask(projectIndex, taskIndex, taskForm.elements.title.value, taskForm.elements.description.value, taskForm.elements.priority.value, taskForm.elements.dueDate.value)
                    event.target.textContent='Edit Task';
                    event.target.parentNode.querySelector('.deleteTask').textContent='Delete Task';
                }
                else{
                    event.target.textContent='Save changes';
                    event.target.parentNode.querySelector('.deleteTask').textContent='Cancel';
                }
                toggleFormElements(taskForm)
                taskForm.toggleAttribute('active')
            }

            if(event.target.classList.contains('deleteTask')){
                event.preventDefault();
                if(taskForm.hasAttribute('active')){
                    showTasks(projectList[projectIndex]);
                }
                else{
                    deleteTask(projectIndex, taskIndex);
                }
                toggleFormElements(taskForm);
                taskForm.toggleAttribute('active')
            }

            if(event.target.classList.contains('toggleComplete')){
                toggleComplete(projectIndex,taskIndex);
            }
        }
    })

}();

export {setEventListeners}

