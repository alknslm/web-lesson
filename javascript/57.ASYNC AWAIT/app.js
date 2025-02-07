// ? ASYNC AWAIT
// ? https://jsonplaceholder.typicode.com/ 
// ? TEMEL MANTIK ASENKRON ÇALIŞAN METHODLARIN YÖNETİLMESİ GEREKİYOR
// ! promise(then) zincirinden kurtarır
// ! async yazılan method *promise* döner

// async function hello(){
//     return "Hello World";
// }

// console.log(hello());

// hello().then((res) => console.log(res));

// ? ASYNC AWAIT OLMADAN
// document.querySelector("#button").addEventListener('click', () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((post) => {
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((respone) => respone.json())
//         .then((comments) => { console.log(comments)})
//     })
// })

//?ASYNC AWAIT
// ! await sadece async methodlarda kullanılır
// ! bir methodun başlaması için diğer methodun beklenmesi gerektiğinde await kullanılır

document.querySelector("#button").addEventListener('click', async () => {
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json();

    const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComment.json();

    console.log(comments);
})


//! üstteki methodun kısaltılmış hali #button2
document.querySelector("#button2").addEventListener('click', async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
  
    console.log(comments);
})