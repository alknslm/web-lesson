// ! ES6'dan önce 

// function yazdir(){
//     console.log("Merhaba");
// }

// yazdir();

//? ARROW FUNCTION
// ? ES6'dan sonra
const yazdir = (paramter) => {
    console.log("Merhaba " + paramter);
}
yazdir("selim");


// eğer function tek satırsa süslü parantex olmasada olur
// eğer method tek parametre alıyorsa parantez olmadan paramtere yazılabilir

const yazdir2 = firstName => console.log("Merhaba "+firstName);
yazdir2("Ali");

// eğer method içinde tek bir işlem varsa return kullanmadan da yapılabilir işlem
const kupAl = x => x*x*x;
console.log(kupAl(10));

