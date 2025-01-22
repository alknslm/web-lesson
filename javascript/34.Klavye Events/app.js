// KLAVYE EVENTS

//keypress harf ve sayılarda çalışıyor
//keydown bütün klavye tuşlarında çalaışıyor
//keyup tuşlardan elinin kaldırdığında çalışır.

// document.addEventListener("keypress", run); // sadece harf ve rakamlarda çalışır
// document.addEventListener("keydown", dontRunRefresh); // bütün tuşlar için çalışır
// document.addEventListener("keyup", run); // bütüntuşlar için çalışır

// function run(e){
//     console.log(e.key + " ascii: " + e.keyCode + " ascii: "+ e.which); // tuş ve ascii kodu
// }

// F5'e basmaya izin vermeden

// function dontRunRefresh(e){
//     if(e.keyCode == 116){
//         alert("Sayfa Yenileme Engellendi");
//         e.preventDefault();
//     }
// }

//inputa girilen değeri header'a yazdırma 
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup", run);

function run(e){
    cardTitle.textContent = e.target.value;
}