
let userInput = document.querySelector('.input');
let submitButton = document.querySelector('.add');
let toDoList = document.querySelector('.to-do-list')

//Listeners
submitButton.addEventListener('click', addChore);
toDoList.addEventListener('click', deleteTask);


//functions

function addChore(event){
    event.preventDefault();
    //console.log("test");
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    let newTask = document.createElement("li");
    newTask.innerText = userInput.value;
    newTask.classList.add('todo-item');
    toDoDiv.appendChild(newTask);

    //complete button

    let completeButton = document.createElement('button');
    completeButton.innerHTML = "<i class='fa fa-check'></i>";
    completeButton.classList.add("completeBut");
    toDoDiv.appendChild(completeButton);

    //remove button

    let removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fa fa-trash"></i>';
    removeButton.classList.add("removeBut");
    toDoDiv.appendChild(removeButton); 

    toDoList.appendChild(toDoDiv);

    userInput.value = "";
}

function deleteTask(e){
    let selectedItem = e.target;

    if(selectedItem.classList[0] === 'removeBut'){
        let todo = selectedItem.parentElement;
        todo.classList.add("deleteTrans");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        }
        );
    }

    if(selectedItem.classList[0] === 'completeBut'){
        let todo = selectedItem.parentElement;
        todo.classList.toggle("completed");
    }
    
}
