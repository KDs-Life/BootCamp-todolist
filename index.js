let textInput = document.querySelector("#new-task-input");
let submitButton = document.querySelector("#add-task-btn");
let task = document.querySelector("#task-input");


function addTextAlert() {
        if (textInput.value.length > 0) {
          alert("OK");
        } else {
          alert("You must add some text hier");
        }
      }
      

function addTask() {
    task.innerHTML = `${textInput.value}`; 
}

