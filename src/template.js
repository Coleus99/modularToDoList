let pageLoad = function(){
    let body = document.querySelector('body');
    let container = document.createElement('div');
    container.classList.add('container', 'mt-5');
    let title = document.createElement('h1');
    title.textContent = 'Modular To Do List'
    container.appendChild(title);
    body.appendChild(container);
}();

export{pageLoad}