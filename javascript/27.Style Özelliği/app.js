// Style Properties

const toDo = document.querySelectorAll(".list-group-item")[0];
const todoList = document.querySelector(".list-group");
const todoButton = document.querySelector("#todoAddButton");

console.log(todoButton);
// console.log(todoList);
// console.log(toDo);

toDo.style.color = "#fff";
toDo.style.backgroundColor = "purple";
toDo.style.fontWeight = "bold";
toDo.style.paddingTop = "20px";
toDo.style.paddingLeft = "70px";

todoList.style.marginTop = "60px";

todoButton.style.backgroundColor = "red";
todoButton.style.fontWeight = "bold";
todoButton.style.padding = "10px";

todoButton.style.borderRadius = "50px";