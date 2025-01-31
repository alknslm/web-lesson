// ! STATIC NEDİR

// ! Bir method static ise class'a özgü değilse nesneye özgüdür.
class Matematik{
    static topla(a,b){
        console.log(a+b);
    }

    cikar(a,b){
        console.log(a-b);
    }

    carp(a,b){
        console.log(a*b);
    }

    bol(a,b){
        console.log(a/b);
    }
}

//!static olanlara class üzerinden static değilse nesne üzerinden
const matematik = new Matematik();
matematik.carp(4,7);
// Matematik.cikar(123,43);

Matematik.topla(12,421);