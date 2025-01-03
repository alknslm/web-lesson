// Var - Let - Const


// var : function scope -- ram bellekte çok fazla yer kaplar
// var if'in içinde de tanımlansa dışardan erişim var ama yine func içinde
// let/const : block scope özelliği var
function selamVer(){
    var selam = "Selam";
    if(true){
        var b = 10;
        let c = 11; // sadece block içinde erişim
    }
    //console.log(c) bu hata verir
    console.log(b);
    console.log(selam);

    //var ile tanımlanan bir şey functionda da olsa blockta da olsa function içinde okunur.
}

selamVer();

var a = 5;
var a = 10;
console.log(a); 
//varla tanımlanan aynı isimdeki değişkenler hata vermez
//let ile tanımlanırsa aynı isimdeki değişkenler hataya düşer


// ! LET & CONST ARASINDAKİ FARK
// ! const(constant) : sabit, değişmez (static gibi)


// const x = 10;
// x= 15;
// console.log(a); // değiştiremezsin hatası verir

const user = {
    username: "selim",
    pass : "1234"
}

user.username = "alkan";
console.log(user);

/*
    SCOPE
    Global scope : En geniş scope heryerden erişilebilir
    Function Scope: Fonksiyoon içinde tanımlanan, sadece içinde kullanlır.
    Block Scope: if-do-while-for içinde tanımlanan değişken.
*/

// var desgisken = 10; // GLOBAL SCOPE heryerden erişilebilir
// // var ile tanımlanan değere heryerden erişilebilir.

// if(true){
//     var desgisken2 = 5;
// }

// function methd1(){
//     console.log(desgisken);
// }

// if(true){
//     console.log(desgisken2);
//     methd1();
// }

function method1(){ // methodun içinde tanımlanan değişken sadece method içinde kullanılır
    var sayi =10;
    console.log()
}

