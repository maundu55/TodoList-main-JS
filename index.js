//SELECT ELEMENTS
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');

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
    
}