import{addNewTask, amendTask, toggleFormElements, deleteTask, projectList, addNewProject, removeProject} from './app';

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
            console.log(event.target.getAttribute('data-target'));
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
            if(event.target.hasAttribute('active')){
                let projectIndex = event.target.getAttribute('data-projectIndex');
                let taskIndex = event.target.getAttribute('data-taskIndex');
                amendTask(projectIndex, taskIndex, taskForm.elements.title.value, taskForm.elements.description.value, taskForm.elements.priority.value, taskForm.elements.dueDate.value)
                event.target.textContent='Edit Task';
            }
            else{
                event.target.textContent='Save changes';
            }
            toggleFormElements(taskForm)
            event.target.toggleAttribute('active')
        }
    });

}();

export {setEventListeners}

