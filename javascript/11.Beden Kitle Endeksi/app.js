// BEDEN KİTLE ENDEKSİ

let kilo = Number(prompt("Lütfen kilonuzu giriniz"));
let boy = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz."));

let sonuc = kilo/(boy^2);

if(sonuc <18.5){
    console.log(sonuc + " İdeal Kilonun altında.")
}else if(sonuc >= 18.5 && sonuc <= 24.9){
    console.log(sonuc + " İdeal Kilonun altında.")
}else if(sonuc >= 25 && sonuc <= 29.9){
    console.log(sonuc + " İdeal Kilo")
}else if(sonuc >= 30 && sonuc <= 39.9){
    console.log(sonuc + " İdeal Kilonun üstünde")
}else if(sonuc >= 40){
    console.log(sonuc + " İdeal Kilonun çok üstünde")
}

// tanımlama örneği 
let lpg = 20.5, benzin = 42.7, dizel = 45.7;