//SELECT ELEMENTS
const form = document.getElementById('todoform');

//Define an array
let todos =[];

//FORM SUBMIT
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    saveTodo();
});

//SAVE TODO
function saveTodo(){
    
}