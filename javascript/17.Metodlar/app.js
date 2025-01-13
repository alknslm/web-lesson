// Paramteresiz ve returnsüz methodlar

/**
 * function yazdir(){
//  içerideki kodlar...
 * }
 */


// ? yazdir();
// ? 
// ? function yazdir(){
// ?     console.log("Selim");
// ? }

// ! Parametreli metodlar
// ! PARAMETRELERİN BAŞINDA let const GİBİ TANIMLAMAAR BULUNMAZ

// ! function yazdir2(isim, soyisim){
// !     console.log(isim+ " " + soyisim);
// ! }
// ! yazdir2("Selim","Alkan");
// ! yazdir2("Mustafa", "Can");

// ! let age = Number(prompt("Lütfen yaşınızı giriniz"));
// ! 
// ! ageCalculator(age);
// ! 
// ! function ageCalculator(age){
// !     if(age < 18){
// !         alert("Ehliyet almaya uygun değilsiniz.")
// !     }else {
// !         alert("Ehliyet alabilirsiniz.")
// !     }
// ! }

// * RETURN çeviren methodlar 

let donenDeger = cube(2);
kareAl(donenDeger);

function kareAl(donenDeger){
    let sonuc = donenDeger*donenDeger;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}