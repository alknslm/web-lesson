//Dİnamik Html Elementi Silme


// ! ELEMANI YAKALAYIP SİLME
const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
const todo1 = document.querySelector(".list-group-item");

// todos[0].remove(); // ? bu şekilde silinebilir.
// todo1.remove();

// console.log(todos);

// ! ELEMENTİ PARENT ÜZERİNDEN SİLME

todoList.removeChild(todos[3]);