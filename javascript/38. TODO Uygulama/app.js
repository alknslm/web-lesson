// Tüm elementleri seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#todoClearButton");

let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    //arayüze ve storage'a ekleme
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayınız.");
    } else {
        //arayüze ekleme
        addTodoUI(inputText);
        //storage'a ekleme
        addTodoToStorage(inputText);
        showAlert("success","Todo Eklendi..." );
    }

    e.preventDefault();
}

//!inputa girilen değeri ui'da oluşturmak(html etiketleri ile)
function addTodoUI(newTodo) {
    /*<li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li>*/
    //! arayüze eklerken elementleri oluşturma
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
    addInput.value = "";
}

//! eklenmek isteneni local storage'a bas
function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//! storage'ı kontrol et doluysa diziyi doldur
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

//!gösterilecek alerti dinamik oluşturma
function showAlert(type, message){
    /*<div class="alert alert-success" role="alert">
    This is a success alert—check it out!
    </div> */
    const div = document.createElement("div");
    // div.className = "alert alert-" +type;
    div.className = `alert alert-${type}`; // literal template
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(function() {
        div.remove();
    }, 2000);
}