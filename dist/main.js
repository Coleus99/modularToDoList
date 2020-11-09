(()=>{"use strict";let t=function(){let t=document.querySelector(".projectsWrapper");t.innerHTML="",n.forEach((o=>{let i=document.createElement("div");i.classList.add("project","card","my-2"),i.setAttribute("data-projectIndex",""+n.indexOf(o)),i.innerHTML=`\n            <div class="card-header d-flex justify-content-between">\n                <span>${o.name}</span>\n                <button type="button" class="close" aria-label="Close">\n                    <span class="closeProject" data-target="${o.name}" aria-hidden="true">&times;</span>\n                </button>\n            </div>\n            <ul class="list-group list-group-flush" id="${o.name}">\n                <p>No tasks yet! Add one below</p>\n            </ul>\n            <div class="card-footer">\n                <form class="newTaskForm">\n                    <div class="form-row">\n                        <div class="form-group mb-2 col-md-6">\n                            <input name="title" type="text" class="form-control taskName" placeholder="Task Name">\n                        </div>\n                        <div class="form-group mb-2 col-md-3">\n                            <select name="priority" class="form-control-plaintext prioritySelect">\n                                <option value="high">High Priority</option>\n                                <option value="medium" selected>Medium Priority</option>\n                                <option value="low">Low Priority</option>\n                            </select>\n                        </div>\n                        <div class="form-group mb-2 col-md-3">\n                            <input name="dueDate" type="text" class="form-control dueDate" placeholder="Due Date" autocomplete="off">\n                        </div>\n                    </div>\n                    <div class="form-row">\n                        <div class="form-group mb-2 col-md-9">\n                            <textarea name="description" class="form-control description" id="exampleFormControlTextarea1" rows="1" placeholder="Description"></textarea>\n                        </div>\n                        <div class="form-group mb-2 col-md-3">\n                            <button type="submit" class="btn btn-primary mb-2 addTask">Add Task</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        `,t.appendChild(i),e(o)}))},e=function(t){let e=document.getElementById(t.name);e.innerHTML="",t.taskList.forEach((o=>{let i=document.createElement("li");i.classList.add("list-group-item"),i.setAttribute("data-taskIndex",""+t.taskList.indexOf(o)),i.setAttribute("data-projectIndex",""+n.indexOf(t)),i.setAttribute("priority",o.priority),i.setAttribute("completed",o.completed),i.innerHTML=`\n        <div class="form-group">\n            <input name="status" class="form-check-input ml-0 taskEditor toggleComplete" type="checkbox" ${o.completed?"checked":""}>\n        </div>\n        <form>\n            <div class="form-row">\n                <div class="form-group mb-2 col-md-6">\n                    <input name="title" type="text" disabled class="form-control-plaintext taskName" value="${o.title}">\n                </div>\n                <div class="form-group mb-2 col-md-3 showOnEdit">\n                    <select name="priority" disabled class="form-control-plaintext prioritySelect">\n                        <option value="high" ${"high"===o.priority?"selected":""}>High Priority</option>\n                        <option value="medium" ${"medium"===o.priority?"selected":""}>Medium Priority</option>\n                        <option value="low" ${"low"===o.priority?"selected":""}>Low Priority</option>\n                    </select>\n                </div>\n                <div class="form-group mb-2 col-md-3 dueDateGroup">\n                    <div class="toolTip"><span style="font-size: 22px">📅<span>\n                        <span style="font-size: 12px" class="tooltiptext">Due: ${o.dueDate}</span>\n                    </div>\n                    <input name="dueDate" type="text" disabled class="form-control-plaintext dueDate" placeholder="Due Date" value="${o.dueDate}" autocomplete="off">\n                </div>\n                <div class="form-group mb-2 col-md-9">\n                    <textarea  name="description" disabled class="form-control-plaintext description" rows="1">${o.description}</textarea>\n                </div>\n                <div class="form-group button-group mb-2 col-md-3">\n                    <button class="btn btn-primary mb-2 taskEditor editTask">Edit</button>\n                    <button class="btn btn-danger mb-2 taskEditor deleteTask">Delete</button>\n                </div>\n            </div>\n        </form>\n        `,e.appendChild(i)})),document.querySelectorAll(".dueDate").forEach((t=>{t.hasAttribute("datepicker")||(datepicker(t),t.setAttribute("datepicker","active"))}))};function o(t,e,o,n){this.title=t,this.description=e,this.priority=o,this.dueDate=n,this.completed=!1}let n=JSON.parse(localStorage.getItem("myToDoLists"))||[];function i(e){n.push(new a(e)),localStorage.setItem("myToDoLists",JSON.stringify(n)),t()}function s(t){for(var e=t.querySelectorAll("input,select,textarea"),o=0;o<e.length;o++)e[o].disabled=!e[o].disabled,e[o].classList.toggle("form-control-plaintext"),e[o].classList.toggle("form-control")}function a(t){this.name=t,this.taskList=[]}(function(){let t=document.querySelector("body"),e=document.createElement("div");e.classList.add("container","mt-5");let o=document.createElement("div");o.classList.add("projectsWrapper");let n=document.createElement("h1");n.textContent="Modular To Do List";let i=document.createElement("form");i.classList.add("form-inline"),i.setAttribute("id","newProjectForm"),i.innerHTML='\n        <div class="form-group mb-2 mr-2">\n            <input type="text" class="form-control" placeholder="Enter new list name">\n        </div>\n        <button type="submit" class="btn btn-primary mb-2">Add List</button>\n    ',e.appendChild(n),e.appendChild(o),e.appendChild(i),t.appendChild(e)})(),document.addEventListener("submit",(function(t){"newProjectForm"===t.target.id&&(t.preventDefault(),i(t.target[0].value),t.target[0].value="")})),document.addEventListener("click",(function(e){var o;e.target.classList.contains("closeProject")&&confirm("This project's tasks will also be deleted. Continue?")&&(o=e.target.closest(".project").getAttribute("data-projectIndex"),n.splice(o,1),localStorage.setItem("myToDoLists",JSON.stringify(n)),t())})),document.addEventListener("submit",(function(t){var i,s,a,r,l;t.target.classList.contains("newTaskForm")&&(t.preventDefault(),i=t.target.closest(".project").getAttribute("data-projectIndex"),s=t.target.elements.title.value,a=t.target.elements.description.value,r=t.target.elements.priority.value,l=t.target.elements.dueDate.value,n[i].taskList.push(new o(s,a,r,l)),localStorage.setItem("myToDoLists",JSON.stringify(n)),e(n[i]),t.target.reset())})),document.addEventListener("click",(function(t){if(t.target.classList.contains("taskEditor")||t.target.classList.contains("form-control-plaintext")){let o=t.target.closest("form"),i=t.target.closest(".list-group-item").getAttribute("data-projectIndex"),a=t.target.closest(".list-group-item").getAttribute("data-taskIndex");t.target.classList.contains("editTask")&&(t.preventDefault(),o.hasAttribute("active")?(function(t,o,i,s,a,r){Object.assign(n[t].taskList[o],{title:i,description:s,priority:a,dueDate:r}),localStorage.setItem("myToDoLists",JSON.stringify(n)),e(n[t])}(i,a,o.elements.title.value,o.elements.description.value,o.elements.priority.value,o.elements.dueDate.value),t.target.textContent="Edit Task",t.target.parentNode.querySelector(".deleteTask").textContent="Delete Task"):(t.target.textContent="Save",t.target.parentNode.querySelector(".deleteTask").textContent="Cancel"),s(o),o.toggleAttribute("active")),t.target.classList.contains("deleteTask")&&(t.preventDefault(),o.hasAttribute("active")?e(n[i]):function(t,o){n[t].taskList.splice(o,1),localStorage.setItem("myToDoLists",JSON.stringify(n)),e(n[t])}(i,a),s(o),o.toggleAttribute("active")),(t.target.classList.contains("toggleComplete")||t.target.classList.contains("form-control-plaintext"))&&(console.log("clicked"),function(t,o){n[t].taskList[o].completed=!n[t].taskList[o].completed,localStorage.setItem("myToDoLists",JSON.stringify(n)),e(n[t])}(i,a))}})),null===localStorage.getItem("myToDoLists")?i("My First List"):t()})();