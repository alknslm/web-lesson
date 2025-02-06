//ASENKRON PRBLEMİ

//http istekleri
// birbirine bağlı methodlar için asenkron yapıları senkrona çevirmek gerekir
const users = [
    {
        userId: 5,
        post : "Enes Post 1"
    },
    {
        userId: 5,
        post : "Enes Post 2"
    },
    {
        userId: 5,
        post : "Enes Post 3"
    },
    {
        userId: 6,
        post : "Ali Post 1"
    },
    {
        userId: 7,
        post : "Betül Post 1"
    },
]

//userid
//post by user id

// ! getUserId tamamlanmadan getPostById methodu çalışmamalı bunun için callbackler
function getUserId(callback){
    setTimeout(() => {
        //servise gittik ve cevabı aldık
        let userId = 5;
        callback(userId);
    }, 1000);
}

function getPostById(userId){
    console.log(userId);
    //normalde bir rest api ye istek atılacak
    setTimeout(() => {
        users.forEach((user) => {
            if(user.userId === userId){
                console.log(user.post);
            }
        })
    }, 500);
}

getUserId(getPostById);
// let userId = getUserId();
// getPostById(userId);