// * KELİME SAYISI BULMA

// * let metin = "Şuan Yalova'da JavaScript eğitimi çekiyorum";
// * 
// * let harf = prompt("Harfi giriniz");
// * 
// * let bulunanHarf = bul(harf);
// * console.log("Bulunan harf sayısı : " + bulunanHarf);
// * 
// * function bul(harf){
// *     let toplam = 0;
// *     for(let i = 0; i < metin.length; i++){
// *         if(metin.charAt(i).toLocaleLowerCase() == harf.toLocaleLowerCase()){
// *             toplam += 1;
// *         }
// *     }
// *     return toplam;
// * }

// ! MÜKEMMEL SAYI BULMA

// ! 28'in bölenler = 1,2,4,7,14,28 topla bunları = 56 = 28*2

let userNumber = prompt("Lütfen sayı giriniz");
isPerfectNumber(userNumber);

function isPerfectNumber(number){
    let toplam = 0;
    for(let i = 2; i <= number/2 ; i++){
        if(number % i == 0 ){
            toplam += i;
        }
    }
    toplam += 1+number;

    if(toplam == number*2){
        alert("Sayınız mükemmel sayıdır.")
    }else{
        alert("Sayınız mükemmel sayı değil.")
    }
}