
let mesaj = 
`
Migrosa Hoşgeldiniz.
Money Kartınız Var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat : 100
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 220
    }
]


//true false döner
let sonuc = confirm(mesaj);
let odenecekTutar = 0;
if(sonuc){
    let isim = prompt("Adınızı giriniz");
    let soyisim = prompt("Soyisminizi giriniz");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler); 
    odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.isim} ${musteri.soyisim}
        Ödenecek Tutar : ${odenecekTutar}
    `);
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`);
}

