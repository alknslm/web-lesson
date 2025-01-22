// Session Storage
// ? tarayıcıda depolanan şeylerdir. Session storage, tarayıcı kapandığında, bilgisayar kapandığında silinir.

// ! session storage değer ekleme
// sessionStorage.setItem("120", "Selim");
// sessionStorage.setItem("216", "Robot");
// sessionStorage.setItem("215", "Arif");
// sessionStorage.setItem(512, 40); // bütün değerler string basılır


// ! session storage değer silme
// sessionStorage.removeItem("215");


// ! session storage değer alma
// let value = sessionStorage.getItem("215");

// if(value === null){
//     console.log("Değer bulunamadı");
// }else {
//     console.log("Bulunan değer: " + value);
// }


// ! session storage hepsini silme
// sessionStorage.clear();


// let value = sessionStorage.getItem(512);
// console.log(typeof value);

// ! değerler string yazılır value kısmına
// let names = ["ali", "Ayşe", "Hamza", "Kübra"];

// ! değerler string yazılmaması için dizi gibi yazdırsın diye json.stringfy kullanılır.
// sessionStorage.setItem("names",JSON.stringify(names));

// ! dizi gibi okumak içinde JSON.parse
// let value = JSON.parse(sessionStorage.getItem("names"));
// console.log(value);