/* const itemsArray = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log(itemsArray); */


/* get Date for the to-do entrys */
let date = new Date().toLocaleDateString();
document.getElementById("entry_date").innerHTML = date;
document.getElementById("entry_date2").innerHTML = date;
document.getElementById("entry_date3").innerHTML = date;
console.log(date);

/* initialize variables and arrays */
const addButton = document.getElementById("add_Button");
const userInput = document.getElementById("user_input");

const userInputArray = [];

/* DOM Manipulation for Add Button */
addButton.addEventListener("click", addListItem);



function addListItem(e) {
  e.preventDefault();
  /*   const listElement = document.createElement("li");
  listElement.innerHTML = userInput.value;
  document.getElementById("list_items").appendChild(listElement);
 */
  const divElement = document.createElement("div");
  divElement.classList.add("list_div_item");
  divElement.innerHTML = `<input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <div class="todo_text_area">
                              <textarea placeholder="To Do" rows="1" cols="19">${userInput.value}</textarea>
                              <p>19.08.2023</p>
                            </div>
                            <button id="trashcan" class="btn"><i id="trash_Can" class="fa fa-trash"></i></button>`;
  /*   divElement.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><p>${userInput.value}</p><br><p>${date}</p><span class="material-symbols-outlined">
  delete
  </span>`; */
  document.getElementById("list_items").appendChild(divElement);
  

  /* Die ToDo Einträge sollen als Array in Local Storage 
  gespeichert werden unter einem Key */

  userInputArray.push(userInput.value);
  console.log(userInputArray);
  /*   localStorage.setItem("items", userInputArray); */
  localStorage.setItem("itemsTwo", JSON.stringify(userInputArray));

  /* localStorage.setItem("item", userInput.value);
  item += 1;
 */

  /*   localStorage.setItem("key/item", userInput.value); */
  /*   localStorage.setItem("item", JSON.stringify(userInput.value)); */
  /*   Der Key muss dynamisch sein: wie kann ich den key dynamisch gestalten, damit eine Liste angefertigt wird? */

  userInput.value = "";

  /*   const btn = document.createElement("button").innerHTML("HelloWorld");
  document.body.appenChild(btn); */
  /*   document.getElementById("list_items").innerHTML = userInput.value; */
}



const trashDeleteButton = document.getElementsById("trash_Can");
trashDeleteButton.addEventListener("click", console.log("JUPPI"));

function deleteTodos(e) {
  if (e.target.innerHTML.contains("delete")) {
    e.target.remove();
  }
}
/* //delete todos
todoList.addEventListener('click', deleteTodos); */
