let oldInputValue;

const saveTodo = (text, done = 0, save = 1) =>{

  criarTask(text)

    if (done) {
        todo.classList.add("done");
      }
    
      if (save) {
        saveTodoLocalStorage({text, done: 0});
      }
    
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
        updateTodoLocalStorage(oldInputValue, text);
        }
    })
}


const getSearchedTodos = (search) => {
    let todos = document.querySelectorAll(".to-do");
  
    todos.forEach((todo) => {
      let todoTitle = todo.querySelector("h3").innerText.toLowerCase();
  
      todo.style.display = "flex";
  
    //   console.log(todoTitle);
  
      if (!todoTitle.includes(search)) {
        todo.style.display = "none";
      }
    });
  };

  function FilterSearch(e){

    let todos = document.querySelectorAll(".to-do");

    todos.forEach((todo) => {
        let todoClass = todo.classList;
        // console.log(todoClass);
        // console.log(e);

        todo.style.display = "flex";

        if(e==="all"){
            todo.style.display = "flex";
        } else if(e==="done" && todoClass!="to-do done"){
            todo.style.display = "none";
        }else if(e==="to-do" && todoClass!="to-do"){
            todo.style.display = "none";
        }else{
            return
        }
        })
  }


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

        updateTodoStatusLocalStorage(todoTitle);
    }

    if(targetE1.classList.contains("edit-to-do")){
        toggleForms()

        $editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

    if(targetE1.classList.contains("remove-to-do")){
        parentE1.remove();

        removeTodoLocalStorage(todoTitle);
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


$searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();
  
    getSearchedTodos(search);
  });

$filterBtn.addEventListener("change", (e) =>{
    let filterValue = $filterBtn.value;
    // console.log(filterValue)

    FilterSearch(filterValue);

})


  loadTodos();