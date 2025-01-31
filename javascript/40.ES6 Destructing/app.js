// DESTRUCTING 

let langs = ["c#","c++","java","javscript","python"];

// ! bu tanım yerine aşağıdaki 
// let lang1,lang2,lang3,lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];


// indexleri sırasıyla verir son index boşta kalabilir
let [lang1,lang2,lang3,lang4] = langs;

console.log(lang1,lang2,lang3,lang4);


const calculate = (a,b) => {
    const toplam = a+b;
    const cikar = a-b;
    const bolum = a/b;
    const carp = a*b;

    const dizi = [toplam, cikar, carp, bolum];
    return dizi;
}

let[a,b,c,d] = calculate(10,2);
console.log(a,b,c,d);


const person = {
    firstName : "Enes",
    lastName : "Bayram",
    salary : 5000,
    age : 25
}


// isim = person.firstName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;


//! dizi yakalarken köşeli parantez, nesne yakalarsen süslü parantez
// key-value çalışıyor keyin aynı olması lazım persondaki isim igib olacak
//eğer aynı keyde tanımlamak istemiyrsak : ile yeni değer yazılır
let {firstName:isim,lastName:soyisim,salary:maas,age:yas} = person;

console.log(isim,soyisim,maas,yas);