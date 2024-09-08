//SELECT ELEMENTS
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl= document.getElementById('todos-list');


//Define an array
let todos =[];
let EditTodoId = -1;

//FORM SUBMIT
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    saveTodo();
    renderTodos();
});

//SAVE TODO
function saveTodo(){
    const todoValue = todoInput.value;

//check if the todo is empty
const isEmpty = todoValue ==='';

//check for duplicate todos
const isDuplicate = todos.some((todo)=>todo.value.toUpperCase() ===todoValue.toUpperCase());

    if(isEmpty){
        alert('todo is empty')
    }else if(isDuplicate){
      alert('todo already exists')  
    }
    else { if(EditTodoId >= 0){
        // update the edit todo
       todos = todos.map((todo, index)=>({
                ...todo,
                value: index === EditTodoId ? todoValue : todo.value
            }));
            EditTodoId = -1;
    } else {
        todos.push({
            value:todoValue,
            checked:false,
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        });
    } 
    todoInput.value ='';
}
}

//RENDER TODOS
function renderTodos(){
    //CLEAR ELEMENT BEFORE A RE-RENDER
    todosListEl.innerHTML = '';
    //RENDER TODOS
   todos.forEach((todo, index)=>{
    todosListEl.innerHTML += `
     <div class="todo" id="${index}">
                <i class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle' }" style="color: ${todo.color}" data-action ="check"></i>
                <p class="" data-action ="check">${todo.value}</p>
                <i class="bi bi-pencil-square" data-action ="edit"></i>
                <i class="bi bi-trash" data-action ="delete"></i>
            </div>
    `
   });
}

//CLICK EVENT LISTENERS FOR ALL THE TODOS
todosListEl.addEventListener('click', (event)=>{
    const target = event.target;
    const parentElement = target.parentNode;

    if(parentElement.className !== 'todo')return;

//t odo id
    const todo = parentElement;
    const todoId = Number(todo.id);

    //target action
    const action = target.dataset.action;

    action ==="check" && checkTodo(todoId);
    action ==="edit" && editTodo(todoId);
    // action ==="delete" && deleteTodo(todoId);

});

// CHECK A TODO
function checkTodo(todoId){
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodos();
}

//EDIT A TODO
function editTodo(){
    todoInput.value = todos[todoId].value;
    EditTodo = todoId;
}