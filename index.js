const addButton = document.getElementById("add_Button");
const userInput = document.getElementById("user_input");

/* const addListItem = document.getElementById("list_items"); */

addButton.addEventListener("click", addListItem);

function addListItem(e) {
  e.preventDefault();
  console.log("Whatup");
  const listElement = document.createElement("li");
  listElement.innerHTML = userInput.value;
  document.getElementById("list_items").appendChild(listElement);

  const divElement = document.createElement("div");
  divElement.classList.add("list_div_item");
  divElement.innerHTML = "Created a ne Div";
  document.getElementById("list_items").appendChild(divElement);

  userInput.value = "";

  /*   const btn = document.createElement("button").innerHTML("HelloWorld");
  document.body.appenChild(btn); */
  /*   document.getElementById("list_items").innerHTML = userInput.value; */
}
