// SPREAD OPERATOR

let numbers = [50,10,20,30,40];

function add(a,b,c,d,e){
    console.log(a+b+c+d+e);
}

//eski yöntem
add(numbers[0],numbers[1],numbers[2],numbers[3]);

//yeni yöntem index 0'dan başlayarak methodun alabildiği kadarını çeker
add(...numbers);

/*
    ...number =  numbers[0],numbers[1],numbers[2],numbers[3]
*/


//?dizi birleştirme
const diller1 = ["java","c#"];
const diller2  = ["php", "python", ...diller1];
console.log(diller2);



const sayilar = [1,2,3,4,5,6,7,8,9];
// dizi tanımı gibi davranır
let [a,b,...kalanSayilar] = sayilar;
console.log(a,b, kalanSayilar);