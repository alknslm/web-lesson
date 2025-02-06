/*
    1-Javascript senkron çalışan bir programlama dilidir.(birden fazla iş
        varsa her brini sırayla yapar.)
    
    Asenkrn çalışmasına Sebep Olanlar
    * Timing
    * Event(Olaylar)(click,enter,klavyeden tuşa basıldığınde)
    * Http İsteklerinde
     
    -------CALLBACK / PROMISE / ASYNC & AWAIT-------------
    Bunlar asenkron problemini çözmek için kullanılır
*/




//Asenkron
setTimeout(() => {
    console.log("Asenkrn 1snde çalışan setTimeOut");    
}, 1000);

console.log("Selim");

console.log("Alkan");

setTimeout(() => {
    console.log("Asenkron 0.75 de çalışan ")
}, 750);


setTimeout(() => {
    console.log("Asenkron 0.5 snde çalışan");
}, 500);