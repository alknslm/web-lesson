//! ÇARPIM TABLOSU

// for(let i = 1 ; i <= 10 ; i++){
//     for(let y = 1; y <=10 ; y++){
//         console.log(i+" X "+ y + " = "+ i*y);
//     }
//     console.log("----------------------")
// }

// ? ASAL SAYI BULMA

// let sayi = Number(prompt("Asal mı değil mi ?"));
// let sonuc = true;
// for(let i = 2; i <= Math.floor(sayi/2) ; i++){
//     if(sayi % i == 0){
//         // asal değildir
//         sonuc = false;
//         break;
//     }
// }
// if(sonuc){
//     alert(sayi + " asaldır.")
// }else {
//     alert(sayi+" asal değildir.")
// }

// * ARMSTRONG SAYI BULMA
// 153 = 1*1*1 + 5*5*5 + 3*3*3 rakamlarının küplerinin toplamı kendisine eşit

let armsayi = prompt("Lütfen bir sayı girin");
let toplam = 0;

for(let i =0; i <armsayi.length ; i++){
    let rakam = armsayi.charAt(i)
    toplam += rakam*rakam*rakam;
}

if(Number(armsayi) == toplam){
    alert("Armstrong sayısıdır.")
}else {
    alert("Armstrong sayısı değildir.")
}
