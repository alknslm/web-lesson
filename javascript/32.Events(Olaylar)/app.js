//EVENT OLAY

const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click", function(){
//     alert("Merhaba");
// });

clearButton.addEventListener("click", changeTitle);

function changeTitle(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target.textContent);
    console.log(e.target);
    console.log(e.target.className);
}
