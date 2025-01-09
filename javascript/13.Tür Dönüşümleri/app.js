/**
 *      Tür Dönüşümleri
 * strings, numbers, booleans, undefined, null
 * object function      
 */


let a = 5 ;
let b = Number("10");
console.log(a+b);

// !!!!!!!!!!!!!!!!

// ParseInt()

let x = 8;
let y = parseInt("12");
let c = parseFloat("14");
let d= parseInt("15.78"); // virgülden sonrasını atar

console.log(c)
console.log(d);
console.log(typeof y)
console.log(x+y);

//!!!!!!!!!!!!!!!!!!!!

// Numberdan stringe

let numara = 55;
console.log(numara);

console.log(typeof String(numara));
console.log(numara.toString())

// !!!!!!!!!!!!!!!
// boolean
let sonuc = true;
console.log(typeof sonuc);
console.log(typeof sonuc.toString());


// ! NaN
let nanTry = Number("C");
console.log(nanTry)

let arrayOfNumber = String([1,2,3,4]);
console.log(typeof arrayOfNumber);