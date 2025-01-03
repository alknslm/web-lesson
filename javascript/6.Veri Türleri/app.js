/*
1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function

*/

let isim = "Selim";
console.log(typeof isim);

let age = 20;
console.log(typeof age);

let man = true;
console.log(typeof man);

let national = null;
console.log(typeof natinal);

let tanimsiz;
console.log(typeof tanimsiz);

let insan ={
    name : "selim",
    surname: "alkan"
}
console.log(typeof insan);

let getAge = function(insan){
    console.log(insan.name);
}
getAge(insan);
console.log(typeof getAge);