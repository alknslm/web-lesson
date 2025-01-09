// Breakpoint Tooltipler
// tooltip üstüne gleince açılan metinler
// !! debuger nereye konulduysa ondan başlar tarayıcıda inspect-source altında görülür

let a = 10;
debugger;
let b = 35;
let c = a+b;
let d = a+b+c;
let e = a+b+c+d;

let sonuc = a+b+c+d+e;
console.log("Sonuc: " + sonuc);
