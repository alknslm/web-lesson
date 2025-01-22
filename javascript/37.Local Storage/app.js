// Local Storage
// ? tarayıcıda depolanan şeylerdir. Local storage, tarayıcı kapandığında, bilgisayar kapandığında silinmez.

// LOCAL STORAGE

// değer ekleme
// localStorage.setItem("motion1", "Şınav");
// localStorage.setItem("motion2", "Barfiks");
// localStorage.setItem("motion3", "Burpee");
// localStorage.setItem("motion4", "Squat");

//değer alma
// let value = localStorage.getItem("motion1");
// console.log(value);

// değer silme
// localStorage.removeItem("motion4");

//tümünü temizle
// localStorage.clear();

// array gibi saklama
// let motions = ["Push up", "Barfiks", "Burpee", "Squat", "Chin Up"];
// localStorage.setItem("motions", JSON.stringify(motions));

// let motionsValue = JSON.parse(localStorage.getItem("motions"));
// console.log(motionsValue);