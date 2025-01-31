//Map 

 const map1 = new Map();

// !SET ile istendiği gibi değer ataması ypaılabilir
//  map1.set(1,"Ahmet");
//  map1.set(true,5);

let value;
map1.set(34,"İstanbul");
map1.set(35,"İzmir");
map1.set(6,"Ankara");
map1.set(1,"Adana");


// ! GET

// console.log(map1.get(35));

// const donenDeger = map1.get(34);
// console.log(donenDeger);

// value = map1.size;

// value = map1.delete(34);

// console.log(map1.size);
// console.log(value);

// ! SIZE
// console.log(map1.has(35));

// ! DEĞERLERİ ALMA
for (const value of map1) { // Destructing
    console.log(value);
}

for (const [key,value] of map1) { // Destructing
    console.log(key,value);
}

// ! KEY
const keys = map1.keys();
keys.forEach(element => {
    console.log(element);
});

for (const key of map1.keys()) {
    console.log(key);
}

// ! MAPTEN ARRAYA

const array = Array.from(map1);
console.log(array);

//!ARRAYDEN MAPA

const myMap = new Map(array);
console.log(myMap);

// ! UNDEFINED
map1.set([1,2,3], "Array");
console.log(map1.get([1,2,3])); // undefined çünkü farklı referanslara bakıyor

let key = [1,2,3];

map1.set(key,"Arrayy");
console.log(map1.get(key));