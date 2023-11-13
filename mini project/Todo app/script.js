//find
const card = document.querySelector(".card");
const todoForm = card.querySelector("form");
const todoInput = card.querySelector("#task_name");
const todoAddButton = card.querySelector("#add");
const todoUl = card.querySelector("#ul");
const message = card.querySelector("#showMessage");


//get Todos Form Localstorage
const getTodosFormLocalstorage = () =>{
    return localStorage.getItem("myTodos")  ? JSON.parse(localStorage.getItem("myTodos")) : [];
}

//show message
const showTodoMessage = (text,status) =>{
    message.textContent = text;
    message.classList.add(`bg-${status}`);

    setTimeout(() => {
        message.textContent = " ";
        message.classList.remove(`bg-${status}`);
    },1000)
    // console.log(`${message}, ${status}`);
}



//create li
const createTodo = (todoId,todoValue) =>{
        const todoLi = document.createElement("li");
        todoLi.setAttribute('id',`${todoId}`);
        todoLi.innerHTML = `
        <span>${todoValue}</span>
        <span><button id="delete"><i class="fa-solid fa-delete-left"></i></button>
        </span>
        `;
        todoUl.appendChild(todoLi);
        
        const deleteButton = todoLi.querySelector("#delete");
        deleteButton.addEventListener("click", deleteTodo);
};

//deleteTodo
const deleteTodo = (event) => {
    const selectItem = event.target.parentElement.parentElement.parentElement;
    todoUl.removeChild(selectItem);
    showTodoMessage("Todo Deleted","danger");


    let todos = getTodosFormLocalstorage();
    todos = todos.filter((item)=> item.todoId != selectItem.id);
    localStorage.setItem("myTodos",JSON.stringify(todos));
}



//add todo
const addTodo = (event) => {
    event.preventDefault();
    if (todoInput.value) {
        const todoValue = todoInput.value;

        //unique id
        const todoId = Date.now().toString();
        createTodo(todoId,todoValue)

        //localStorage
        const todos = getTodosFormLocalstorage();
        todos.push({todoId,todoValue});
        localStorage.setItem("myTodos",JSON.stringify(todos));

        todoInput.value = "";
        //call showTodoMessage 
        showTodoMessage("Todo create successfulliy","success");
    } else {
        showTodoMessage("Somthing with wrong","danger");
    }
}

//loadTodos
const loadTodos = () =>{
    const todos = getTodosFormLocalstorage();
    todos.map((item) => {
        createTodo(item.todoId,item.todoValue);
    })
}



//add Event Listener
todoForm.addEventListener("submit",addTodo);
//loadTodos 
window.addEventListener("DOMContentLoaded",loadTodos);