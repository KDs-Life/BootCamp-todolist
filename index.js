// Die items, die sich im Local Storage befinden, werden in einem neuen Array gespeichert und geparst
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.getElementById("add_Button").addEventListener("click", () => {
  const item = document.getElementById("user_input");
  createItem(item);
});

/* get actual date */
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;
document.getElementById("entry_date").innerHTML = currentDate;

function createItem(item) {
  itemsArray.push(item.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function displayItems() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">

                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <div class="todo_text_area">
                  <h4>${itemsArray[i]}</h4>
                  <p>19.08.2023</p>
                </div>
                <button class="btn trashcan"><i class="fa fa-trash"></i></button>
              </div>`;
  }
  document.getElementById("bloeder").innerHTML = items;
  addDeleteListeners();
}

function addDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".trashcan");
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => deleteItem(index));
  });
}

function deleteItem(index) {
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  displayItems();
}

displayItems();

/* alert on Share */
document.getElementById("share").addEventListener("click", () => {
  alert("You are NOT able to Share now!");
});
