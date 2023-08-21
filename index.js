let textInput = document.querySelector("#new-task-input");
let submitButton = document.querySelector("#add-task-btn");
let task = document.querySelector("#task-input");



function addTextAlert() {
        if (textInput.value.length > 0) {
          alert("Your new task will be added to the list.");
          task.innerHTML = `${textInput.value}`; 
        } else {
          alert("You must add some text hier");
        }
      }
      
function inputValid() {
  return textInput.value !== "";  
}


function addTask() {
  for (let i=0; i < 5; i++) {
    if (task[i].value === 0) {
      task.innerHTML = `${textInput.value}`; 
    }
  }
    
}

submitButton.addEventListener("click", addTextAlert);
submitButton.addEventListener("click", addTask);



//////////////////////////////////
/*
const newTask = document.querySelector("#new-task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const removeCompleteBtn = document.querySelector(".remove-complete-btn");
const taskList = document.querySelector(".task-list");
const taskTemplate = document.querySelector("#task-template");
let id = 1;

newTask.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && inputValid()) {
    addTask();
  }
});

addTaskBtn.addEventListener("click", () => {
  if (inputValid()) {
    addTask();
  }
});

removeCompleteBtn.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const checked = task.querySelector("input").checked;
    if (checked) {
      task.remove();
    }
  });
});

function addTask() {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector("input");
  checkbox.id = id;
  const label = taskElement.querySelector("label");
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = "";
  id++;
}

function inputValid() {
  return newTask.value !== "";
}


*/