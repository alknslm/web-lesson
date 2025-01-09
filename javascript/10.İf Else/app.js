// let not = 65;

// if(not >50){
//     console.log("geçtiniz, notunuz :"+ not);
// }else {
//     console.log('Kaldınız, notunuz :>> ', not);
// }


// let age = Number(prompt("Yaşınız ?"));
// let money = Number(prompt("Kaç paran var ?"));

// if(age >= 18 && money >= 2500){
//     alert("Ehliyet almaya uygun.")
// }else{
//     alert("Ehliyet almaya uygun değil.")
// }

// !!!!!!!!!!!!!!!!!!!!!!!!

// /**     DERS ORTALAMASI BULMA */
// // vize1 %30, vize2 %30, vfinal %40

// let vize1 = Number(prompt("Vize 1 :"));
// let vize2 = Number(prompt("Vize 2 :"));
// let finalNote = Number(prompt("Final :"));

// let average = vize1*0.3 + vize2*0.3+ finalNote*0.4;

// if(average >= 60){
//     alert("Başarılı");
// }else{
//     alert("Kaldınız.")
// }

// !!!!!!!!!!!!!!!!!!!!!!

// /** ELSE İF YAPISI */

// let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçin");

// if(secilenYol == 1){
//     alert("Secilen yol: "+ secilenYol+".yoldur.");
// }else if(secilenYol == 2){
//     alert("Secilen yol: "+ secilenYol+".yoldur.");
// }else if(secilenYol == 3){
//     alert("Secilen yol: "+ secilenYol+".yoldur.");
// }else{
//     alert("senin yolun yol değil")
// }

//  !!!!!!!!!!!!!!!!!!!!!!
// /** ÇOKLU IF YAPISI */

/*
    ad ve tc no 
    ad: boş geçilmez
    tckn: 11 karakter
*/

let ad = prompt("İSİM GİRİN");
let tckn = prompt("TCKNO GİR");

// check(ad, tckn);
check2(ad, tckn);

function check(ad, tckn){
    if(ad != ""){
        if(tckn.length == 11){
            console.log("isim ve tckn problemsiz girildi.")
        }else{
            console.log("Lütfen kimlik bilgilerini doğru girin")
        }
    }else{
        console.log("Lütfen isim alanını doldurubnuz")
    }
}

function check2(ad, tckn){
    if(ad == ""){
        console.log("İsim alanı boş olmamalı");
        return;
    }
    if(tckn.length != 11){
        console.log("Kimlik no 11 haneli olmalı");
        return;
    }

    console.log("isim ve tckn problemsiz girildi.");
}