//SET
// MAP ile herşey aynı sadece bir değeri yalnızca bir defa tutar
//uniqeness çalışır

const set = new Set();

//add methodu
set.add(true);
set.add(3.14);
set.add("Mehmet");
set.add(7);
set.add({username: "Ali", password: "123"});
set.add([1,2,3,4]);
set.add("Mehmet");
set.add("Mehmet");
set.add("Mehmet");
set.add("Mehmet");

//size
console.log(set.size);

//delete
set.delete("Mehmet");
console.log(set.size);

//has
console.log(set.has(3.14));

for (const value of set) {
    console.log(value);
}

const values = Array.from(set);
console.log(values);

let array = [1,"Enes",true,"Mustafa",[1,2,3,4]];

const newSet = new Set(array);
console.log(newSet);