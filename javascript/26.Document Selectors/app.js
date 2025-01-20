// Selectors

// className , id , tag name 

// ? getElementByid id'ye göre seçme 


/* const button = document.getElementById("todoAddButton");
console.log(button.id);
console.log(button.getAttribute("id"));
console.log(button.className);
console.log(button.getAttribute("class"));

const classList = button.classList;

classList.forEach(element => {
    console.log(element);
});
console.log(classList);

let buttonText = button.textContent; // string alır
let buttonText2 = button.innerHTML; // ! kenarlarındaki html elementlerinin de algılar

console.log(buttonText);
console.log(buttonText2); */

// ? getElementByClass class'a göre yakalama 

/* const todoList = Array.from(document.getElementsByClassName("list-group"));
console.log(todoList);*/

// ? getElementByTagName : etiket ismine göre yakalama

/* const forms = document.getElementsByTagName("form");
console.log(forms[0].name);

const todoList = document.getElementsByTagName("li");
console.log(todoList); */

// ? getElementByid-getElementByClass-getElementByTagName bunların hepsini
// ? querySelector - querySelectorAll -> css gibi seçim yaparken

const clearButton = document.querySelector("#clearButton");
console.log(clearButton); // id için #

const todoList = document.querySelector(".list-group");
console.log(todoList); // class için .

// etiket seçmek istiyorsak . yada # koymadan direk etiket ismini yazıyoruz

const todoList2 = document.querySelectorAll(".card-title");
console.log(todoList2); // birden fazlasını seçmek için All kullanılır.