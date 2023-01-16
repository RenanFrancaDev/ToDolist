
const $todoForm = document.getElementById("to-do-form");
const $todoInput = document.getElementById("to-do-input");
const $todoList = document.getElementById("to-do-list");
const $editForm = document.getElementById("edit-form");
const $editInput = document.getElementById("edit-input");
const $cancelEditBtn = document.getElementById("cancel-edit-btn");
// const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input")
const $eraseBtn = document.querySelector("#erase-button");
const $filterBtn = document.getElementById("filter-select");
 
 function criarTask(text){
    todo = document.createElement("div");
    todo.classList.add("to-do");
  
    todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
  
    doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-to-do");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);
  
    editBtn = document.createElement("button");
    editBtn.classList.add("edit-to-do");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);
  
    deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-to-do");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);
    }