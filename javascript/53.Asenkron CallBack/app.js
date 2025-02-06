// CALLBACK NEDİR

// timing - event - http istekleri

// ? ÇÖZÜM İÇİN ---> callback - promise - async await


//! Callback : bir fonk. bir fonk. parametre geçerek senkron
//! yapıya çeviririz

//! callback = getSurname 
function getName(callback){
    setTimeout(() => {
        //servisten 1snde gelmiş gibi
        let name = "Selim"
        callback(name);
    }, 1000);
}

function getSurname(name , callback){
    //servisten 0.5 snde gelmiş gibi
    setTimeout(() => {
        let surname = "ALKAN"
        callback(surname)
    }, 500);
}

function getAge (name , surname, callback){
    
    setTimeout(() => {
        let age = 23 ; // ismi selim ve soy ismi alkanı servisten getirdi
        callback(age);    
    }, 300);
}
// getName();
// getSurname();

// getName(getSurname);

getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name , surname, age);
        })
    });
})

// ! CALLBACKLER BİR SÜRE SONRA KONTROLDEN ÇIKABİLİR (CALLBACK HELL)