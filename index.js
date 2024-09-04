//SELECT ELEMENTS
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');

//Define an array
let todos =[];

//FORM SUBMIT
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    saveTodo();
});

//SAVE TODO
function saveTodo(){
    const todoValue = todoInput.value;

    //check if the todo is empty
    const isEmpty = todoValue ==='';

    if(isEmpty){
        alert()
    }
    const todo = {
        value:todoValue,
        checked:false,
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
    }
todos.push(todo);

console.log(todos)
}