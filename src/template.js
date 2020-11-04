let pageLoad = function(){
    let body = document.querySelector('body');

    let container = document.createElement('div');
    container.classList.add('container', 'mt-5');

    let projectsWrapper= document.createElement('div')
    projectsWrapper.classList.add('projectsWrapper');

    let title = document.createElement('h1');
    title.textContent = 'Modular To Do List'

    let newProjectForm = document.createElement('form');
    newProjectForm.classList.add('form-inline');
    newProjectForm.setAttribute('id','newProjectForm')
    newProjectForm.innerHTML = `
        <div class="form-group mb-2 mr-2">
            <input type="text" class="form-control" placeholder="Enter new list name">
        </div>
        <button type="submit" class="btn btn-primary mb-2">Add List</button>
    `

    container.appendChild(title);
    container.appendChild(projectsWrapper);
    container.appendChild(newProjectForm);
    body.appendChild(container);
}();

export{pageLoad}