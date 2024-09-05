//SELECT ELEMENTS
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todosListEl= document.getElementById('todos-list');


//Define an array
let todos =[];

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
    else {    
    todos.push({
        value:todoValue,
        checked:false,
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
    });
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
                <i class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle' }" style="color: ${todo.color}"></i>
                <p class="checked">${todo.value}</p>
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-trash"></i>
            </div>
    `
   });
}