import{task, addNewProject, removeProject} from './app';

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
            console.log(event.target.parentNode.id)
            let target = event.target.getAttribute('data-target');
            removeProject(target);
        }
    });
}();

export {setEventListeners}

