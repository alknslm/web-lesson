let urun1 = {
    isim : "ACER Swift",
    kategory : "Teknoloji",
    fiyat : 6.219
}

let urun2 = {
    isim : "ACER Nitro 5",
    kategory : "Teknoloji",
    fiyat : 15.674
}

let urun3 = {
    isim : "ACER Gaming",
    kategory : "Teknoloji",
    fiyat : 13.999
}

let urun4 = {
    isim : "LENOVO V15",
    kategory : "Teknoloji",
    fiyat : 10.999
}

let urun5 = {
    isim : "LENOVO V14",
    kategory : "Teknoloji",
    fiyat : 4.399
}

let urun6 = {
    isim : "LENOVO Ideapad",
    kategory : "Teknoloji",
    fiyat : 4.510
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6]
let filtreliUrunler = [];

let kullaniciUrunIsmi = prompt("Ürün ismi girin");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(urun => {
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun)
        }
    });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(urun => {
        console.log("-------------------------------------------");
        console.log("|" + urun.isim + " | " + urun.fiyat+ " | "+ urun.kategory);
        console.log("-------------------------------------------");
    });
}