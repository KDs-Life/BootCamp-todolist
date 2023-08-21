const addButton = document.getElementById("add_Button");
const userInput = document.getElementById("user_input");

const deleteButton = document.getElementById("mulltone");
const taskItem = document.getElementById("list_items");


///Phillip
const itemsArray = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log(itemsArray);

/* get actual date for the to-do entrys */ ///Phillip
let date = new Date().toLocaleDateString();
document.getElementById("entry_date").innerHTML = date;
console.log(date);



/* const addListItem = document.getElementById("list_items"); */



//addButton.addEventListener("click", addListItem);

function addListItem(e) {
  e.preventDefault();
  console.log("Whatup");
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
                              <textarea placeholder="Add your task here!" rows="1" cols="19">${userInput.value}</textarea>
                              <p>19.08.2023</p>
                            </div>

                            <button id="mulltone" >
                            <span class="material-symbols-outlined"> delete </span> 
                          </button>  `;
  /*   divElement.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><p>${userInput.value}</p><br><p>${date}</p><span class="material-symbols-outlined">
  delete
  </span>`; 
  
  <span class="material-symbols-outlined"> delete </span>
  */
  document.getElementById("list_items").appendChild(divElement);

  /*   localStorage.setItem(item, userInput.value); */

  userInput.value = "";

  /*   const btn = document.createElement("button").innerHTML("HelloWorld");
  document.body.appenChild(btn); */
  /*   document.getElementById("list_items").innerHTML = userInput.value; */
}



// add text alert ////////// Marta /////


function addTextAlert() {
  if (userInput.value.length > 0) {
    alert("Great! Your task will be added to the list.");
  } else {
    alert("Your task will be added to the list and you can put some text there.");
  }
}

/*
function deleteButton() {
  taskItem.remove();
}
*/



addButton.addEventListener("click", addTextAlert);
addButton.addEventListener("click", addListItem);

//deleteButton.addEventListener("click", deleteButton);
//addButton.addEventListener(addTextAlert, addListItem);
//addButton.addEventListener("click", addListItem);

// end of add text alert ////////// Marta /////



/////////////DELETE button ///////// 




//deleteButton.addEventListener("click", deleteButton);

