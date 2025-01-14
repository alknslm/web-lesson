//Değer ve Referans Tipleri

 /*
    ilkel tipler:   |        Referans Tipler:
    String          |        Object
    number          |        Array
    boolean         |        Funciton
    undefined       |
    null            |
    symbol          |

    ! ilkel de birinde yapılan değişiklik diğerini etkilemez
    ! referansta ise birinde yapılan diğerini de etkiler
 */

//? referans abzlı çalışmadığığ için eşit çıkar 
let a = 5;
let b = 5;

if(a == b){
    console.log("a ve b eşittir")
}else {
    console.log("a ve b eşit değildir.")
}


    //? farklı referanslara baktıkları için eşit çıkmaz
let dizi1 = [1,2,3];
let dizi2 = [1,2,3];

if(dizi1 == dizi2){
    console.log("eşittir");
}else{
    console.log("eşit değildir.");
}

let dizi3 = [1,2,3];
let dizi4 = [];

dizi4 = dizi3;

dizi3.push(5);
console.log(dizi4);

if(dizi3 == dizi4){
    console.log("eşittir");
}else{
    console.log("eşit değildir.");
}

