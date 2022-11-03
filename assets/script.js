//Seleção de Eventos

const $todoForm = document.getElementById("to-do-form");
const $todoInput = document.getElementById("to-do-input");
const $todoList = document.getElementById("to-do-list");
const $editForm = document.getElementById("edit-form");
const $editInput = document.getElementById("edit-input");
const $cancelEditBtn = document.getElementById("cancel-edit-btn");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input")
const $taskList = document.getElementsByClassName("to-do");
const $task1 = document.getElementById("test");


let oldInputValue;

// Funções
const saveTodo = (text) =>{

    const todo = document.createElement("div");
    todo.classList.add("to-do");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-to-do");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-to-do");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-to-do");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);



    $todoList.appendChild(todo);
    $todoInput.value = ""

};

const toggleForms = () =>{
    $editForm.classList.toggle("hide");
    $todoForm.classList.toggle("hide");
    $todoList.classList.toggle("hide");
}

const uptadeTodo = (text) =>{
    const todos = document.querySelectorAll(".to-do")
    
    todos.forEach((todo)=> {

        let todoTitle = todo.querySelector("h3");
        

        if(todo.innerText === oldInputValue){
        todoTitle.innerText = text;
        }
    })
}

const searchTodo = (inputSearch) =>{

    let i = 0
    const todos = document.querySelectorAll(".to-do")
    
    todos.forEach((todo, i)=> {

        let task = todo.querySelector("h3");
        
        if(!(task.innerText === inputSearch)){
            console.log("foi")
            toggleTask(i)
        }
        $searchInput.value = "";
    })
};

const toggleTask = (i) =>{
    console.log($taskList)
    $taskList[i].classList.toggle("hide");
}



//Eventos

$todoForm.addEventListener("submit", (e) => {

    e.preventDefault()

    let inputValue = $todoInput.value;

    if(inputValue){
       saveTodo(inputValue);
    }
})

document.addEventListener("click", (e) => {

    const targetE1 = e.target;
    const parentE1 = targetE1.closest("div");
    let todoTitle;


    if(parentE1 && parentE1.querySelector("h3")){
        todoTitle = parentE1.querySelector("h3").innerText;
        
    }

    if(targetE1.classList.contains("finish-to-do")){
        parentE1.classList.toggle("done");
    }

    if(targetE1.classList.contains("edit-to-do")){
        toggleForms()

        $editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

    if(targetE1.classList.contains("remove-to-do")){
        parentE1.remove();
    }
})

$cancelEditBtn.addEventListener("click", (e)=>{
    e.preventDefault()

    toggleForms();
})

$editForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    const editInputValue = $editInput.value;
    if(editInputValue){
        uptadeTodo(editInputValue)
    }

    toggleForms();
})

$searchForm.addEventListener("submit", (e) => {

    e.preventDefault()

    let inputSearch = $searchInput.value;

    if(inputSearch){
       searchTodo(inputSearch);
    }
})