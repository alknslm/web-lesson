// Dinamik Element Oluşturma

const card = document.querySelectorAll(".card-body")[1];
const link = document.createElement("a");
const todoList = document.querySelector(".list-group");

link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.youtube.com/";
link.target = "_blank";
link.innerHTML = "Youtube'a Git";


/*
<li class="list-group-item d-flex justify-content-between">Todo 3
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>

 */


const todoI = document.createElement("i");
todoI.className = "fa fa-remove";

const todoLink = document.createElement("a");
todoLink.className = "delete-item";
todoLink.href = "#";
todoLink.appendChild(todoI);

const todo = document.createElement("li");
todo.className = "list-group-item d-flex justify-content-between";
todo.textContent = " Todo Dinamik";

todo.appendChild(todoLink);
todoList.appendChild(todo);


card.appendChild(link);

console.log(link);