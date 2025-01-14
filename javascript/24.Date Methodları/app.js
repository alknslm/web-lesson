

let tarih = new Date();
console.log(tarih);

console.log(tarih.getFullYear());
console.log(tarih.getDate());//ayın kaçıncı günü
console.log(tarih.getDay());//haftanın kaçıncı günü

console.log(tarih.getHours());
console.log(tarih.getMilliseconds());
console.log(tarih.getMinutes());
console.log(tarih.getMonth());// ayları sıfırdan başlatıyor dizi gibi
console.log(tarih.getSeconds());
console.log(tarih.toLocaleDateString());// bildiğimiz tarih formatında çıkarıyor
console.log(tarih.toLocaleTimeString());// saat dakika saniye
console.log(tarih.toLocaleString()); // üstteki ikisi beraber



tarih.setHours(tarih.getHours() + 3);
console.log(tarih.toString());
console.log(tarih);