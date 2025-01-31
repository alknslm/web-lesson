// OOP Giriş

class Insan{
    //Özellik
    //Yapıcı Method
    //Function

    constructor(isim,soyisim,yas,maas){
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster(){
        console.log(`
        İsim : ${this.isim} 
        Soyisim : ${this.soyisim} 
        Yas : ${this.yas} 
        Maas : ${this.maas}
        `);
    }
}

const insan1 = new Insan("Selim","ALKAN",18,10000);
insan1.bilgileriGoster();

const insan2 = new Insan("Saadettin","TEKSOY",55,3500);
console.log(insan2.isim);
insan2.bilgileriGoster();