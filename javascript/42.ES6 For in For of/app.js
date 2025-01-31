// For in For of döngüleri

let names = ["Enes","Ali","Ahmet","Veli","Yusuf"];

names.forEach(element => {
    console.log(element);
});

console.log("--------------");
names.forEach(name => console.log(name)) //arrow funct
console.log("--------------");

// FOR IN DONGUSU --> her elamanın indexini döner

for(let name in names){
    console.log(name);
}
console.log("--------------");


// FOR OF DONGUSU --> her elemanın kendisini döner
for(let name of names){
    console.log(name);
}
console.log("--------------");