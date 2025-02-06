// ? ----------FETCH API------------

// fetch'de kullanılan 2 tane then -> 

// fetch api *promise döner* bunun içinde deresponse nesnesi var
// bizim ihtiyacımız olan response nesnesindeki json methodu
// json() methodu'da *promise döner*. içindeki nesneyi almak içinde 
// onuda tekrar .then diye almak gerekiyor. bu yüzden arka arkaya 2 tane
//  kullanılır.

// function getStundents(url){
//     fetch(url)
//     .then((responsone) =>responsone.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getStundents("students.json");

function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users");

//alttaki method deneme için 
function saveStudents(){
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "id" : 5,
            "firstName" : "Yasemin",
            "lastName" : "Koştu"
        })
    })
}
