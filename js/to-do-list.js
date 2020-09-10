
let userInput = document.querySelector('.input');
let submitButton = document.querySelector('.add');
let toDoList = document.querySelector('.to-do-list')

//Listeners
submitButton.addEventListener('click', addChore);


//functions

function addChore(event){
    event.preventDefault();
    //console.log("test");
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do-list");

    let newTask = document.createElement("li");
    newTask.innerText = userInput.value;
    newTask.classList.add('todo-item');
    toDoDiv.appendChild(newTask);

    //complete button

    let completeButton = document.createElement('button');
    completeButton.innerText = "Done";
    toDoDiv.appendChild(completeButton);

    //remove button

    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    toDoDiv.appendChild(removeButton); 

    toDoList.appendChild(toDoDiv);

    userInput.value = "";
}
