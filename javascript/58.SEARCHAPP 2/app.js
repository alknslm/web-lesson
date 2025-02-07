// ! https://unsplash.com/documentation#search-photos

const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector(".form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".action-btns");
const searchButton = document.querySelector(".verify");
const clearButton = document.querySelector(".clear");

const imageListWrapper = document.querySelector(".imagelist-wrapper")


runEventListener();

function runEventListener(){
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}

//Temizle butonuyla image listesinin içinde çocukları siliyor
function clear(){
    searchInput.value = "";
    // Array.from(imageListWrapper.children).forEach((child) => child.remove());
    imageListWrapper.innerHTML = "";
}


//formda butona basılınca apiden resimleri çeker
function search(e){
    imageListWrapper.innerHTML = "";
    const value = searchInput.value.trim();
    //RequestParam - Spring -Rest API
    //acces tokenlar headers içine yazılır
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID WsoY3bbrd7QdSbYXujx9ue2NTegfh_rDDFjIkhhkaEo"
        }
    })
    .then((res) => res.json())
    .then((data) => {
        Array.from(data.results).forEach(image => {
            console.log(image.description);
            addImageToUI(image.urls.small,image.description);
        });
    })
    .catch((err) => console.log(err));

    e.preventDefault();
}


//url'leri alınan resimleri dib oluşturup içine ekler
function addImageToUI(url,description){
    const divStack = document.createElement("div");
    divStack.className="stack";

    const div = document.createElement("div");
    div.className = "card";

    const paragh = document.createElement("p");
    paragh.textContent = description;

    const image = document.createElement("div");
    image.className = "image";

    const img = document.createElement("img");
    img.setAttribute("src", url);

    image.appendChild(img);
    div.appendChild(image);
    div.appendChild(paragh);
    divStack.appendChild(div);
    imageListWrapper.appendChild(divStack);
}