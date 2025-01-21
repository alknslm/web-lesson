// Elementleri Yer Değiştirme

const cardBdy = document.querySelectorAll(".card-body")[1];

/* <h5 class="card-title">Todo Listesi</h5> */
const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Dinamik Header";

cardBdy.replaceChild(newTitle, cardBdy.childNodes[1]);

