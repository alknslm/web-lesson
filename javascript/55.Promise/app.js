// ? Promiseler callBacklerin alternatifleridir.
// ? Asenkronu senkrona çevirir
// ? .then methodu çalışırken başarılı işlem yapıldıktan sonra gidilecek diğer
// ? diğer method yazılıp işlemlere devam edilebilir 
/**
 * pending -> bekleme
 * fullfiiled(resolve) -> işlem başarılı
 * rejected -> işlem reddedildi
 * 
 *  resolve'da verilen data .then'de  reject'te gelen hata .catch'de yakalanır
 */


// let check = false;

// const promise1 = new Promise((resolve, reject) => {
//     if(check){
//         resolve("Promise başarılı");
//     }else{
//         reject("Promise başarısız");
//     }
// })

// console.log(promise1);

// function createPromise(){
//     return new Promise((resolve,reject) => {
//         if(check){
//             resolve("Promise'te sorun yok");
//         }else{
//             reject("Sıkıntı büyük");
//         }
//     })
// }

// createPromise()
// .then((respone) => { // başarılı olma durumunda çalışır
//     console.log(respone);
// }).catch((error) => { // başarısız olma durumunda çalışır
//     console.log(error);
// }).finally(()=> console.log(`Her zaman çalışır`)); // her zaman çalışır


// ? PROMİSE + XMLHTTPREQUSET

function readStudents(url){
    
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

// readStudents("students.json")
// .then((data) => console.log(data))
// .catch((error) => console.log("Hata aldım" + error))
// .finally(()=> console.log("Servis çağrımı başarılı."))

function getUsers(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })

        xhr.open("GET", url);
        xhr.send();
    })

}

function getCommentsByUserID(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })

        xhr.open("GET", url);
        xhr.send();
    })
}


// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((data) => {
//     // data.forEach(user => {
//     //     console.log(user.name);
//     // });
//     // console.log("Data geldikten sonra farklı asenkron methodlarla işlem yapılabilir");
//     console.log(data);
//     //birden fazla then için returnle methodu çevirmen lazım
//     return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
// }).then((res) => console.log(res))
// .catch((err) => console.log(err))
// .finally(() => console.log("Mail gönderildi"));

const p1 = Promise.resolve("Birinci promise başarılı");
const p2 = Promise.resolve("İkinci promise başarılı");
const p3 = new Promise((resolve, reject) => {
    resolve("Üçüncü promise başarılı");
})
const p4 = Promise.reject("Dördüncü promise başarısız");

// ! Projedeki promiseleri array olarak verip hepsine göre işlem yapıyor
// ! Hepsi başarılı olursa resolve, içlerinden bir tanesi bile başarısız olsa
// ! reject döner. Hepsinin başarılı olması lazım.
Promise.all([p1,p2,p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})