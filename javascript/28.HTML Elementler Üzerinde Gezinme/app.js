// html elementleri üzerinde gezinme

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
const card = document.querySelector(".card");
const row = document.querySelector(".row");
let value;

// ! ebeveynden çocuklara eirşmek

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = " DEĞİŞTİ";

// value = Array.from(todoList.children);

// value.forEach(element => {
//     console.log(element.textContent);
// });

// ! Çocuktan anneye erişim

value = todo;
value = todo.parentElement.parentElement;

// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
// let container = row.parentElement;
// console.log(container);

value = todo; // Todo 1'ken
value = todo.nextElementSibling; // ! Todo 2 oluyor sonraki elemana kaydırıyor 
value = todo.nextElementSibling.nextElementSibling;
value = todoLastChild;

value = todoLastChild.previousElementSibling.previousElementSibling; // ! önceki elemana kaydırıyor

value = row.children[0].children[3].children[0]; // row'dan başlayarak aşağı doğru istediğimiz yere ulaştık
value.textContent = "Todo Listesi Parent Child";

value = row.children[0].children[3].children[2].children[2];
value.style.color = "red";
value.style.backgroundColor = "lightgray";
value.style.padding = "20px"
console.log(value);