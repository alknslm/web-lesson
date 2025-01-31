//TEMPLATE LITERALS
//String ifadeleri birleştirme

function write(firstName, lastName){
    // console.log("İsim : "+ firstName + " Soyisim : "+ lastName);

    //! template literal kuulanımı TIRNAK içi "AltGr + ;"
    console.log(`
    İsim : ${firstName} 
    Soyisim : ${lastName}
    `);
}

write("Selim", "Alkan");


