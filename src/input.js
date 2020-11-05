import{addNewTask, deleteTask, projectList, addNewProject, removeProject} from './app';

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
            console.log(projectIndex)
            addNewTask(projectIndex, 'Task1', 'test task', 'High Priority', 'Today')
            // addNewTask(event.target.parentNode.getAttribute('data-index'), 'Task1', 'test task', 'High Priority', 'Today')
            // addNewTask(event.target.parentNode.id, event.target[0].value, event.target[3].value,event.target[1].value,event.target[2].value);
        }
    });
}();

export {setEventListeners}

