// DİZİLER

// let sayilar = [0,1,2,3,4,"Selim","ali",8,9]

// sayilar[5] = "Mehmet";

// console.log(sayilar[5]);
// console.log(sayilar);



// //TANIMLAMALAR
// let dizi1 = [];
// let dizi2 = Array("Enes", "Ali");

// dizi1[0] = "asd";
// dizi1[1] = 12;



//FOREACH DÖNGÜSÜ İLE
let karisikDizi = [1,"Ahmet", 5.7, true, null, undefined];

karisikDizi.forEach(element => {
    console.log(element +" bu nesnenin türü -> "+ typeof element);
});

console.log("************************************")

karisikDizi.forEach(function(isim){
    console.log(isim);
})

let sayac = 0;
while(sayac < karisikDizi.length){
    console.log(karisikDizi[sayac]);
    sayac++;
}