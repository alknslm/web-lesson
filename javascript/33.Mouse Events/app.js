// MOUSE EVENTLARI

// ! DOMContentLoaded -> sayfa yüklendiğinde çalışacak event

// document.addEventListener("DOMContentLoaded", run);

// function run(){
//     console.log("Sayfa Yüklendi HO.")
// }


// ! load -> window üzerinden sayfa yüklendiğiinde çalışır
// window.addEventListener("load", (event) => {
//     alert("Sayfa Yüklendi");
// });


// ! hehangi bir etiket için click methodu
const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("dblclick", run);

// ! mouse ile üzerinde gezinince çalışır, childlerı üzerinde de geçerli
const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseover", run); childlar üzerinde gezinince çalışır
// cardBody.addEventListener("mouseout", run); childlar üzerinde gezinince çalışır
// cardBody.addEventListener("mouseenter", run); sadece verilen etiket üzerinde çalışır
// cardBody.addEventListener("mouseleave", run); sadece verilen etiket üzerinden ayrılıınca çalışır

function run(e){
    console.log(e.type + " Tıklandı");
}
