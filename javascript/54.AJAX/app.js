// AJAX -> Asynchronous JavaScript And XML
// Projeyle server'ı birbirine bağlamak için kullanılır

function prepareUrl(url,id){
    if(id === null){
        return url;
    }
    return `${url}?postId=${id}`;
}

function getComments(url, id){
    let urlPrepared = prepareUrl(url,id);

    const xhr = new XMLHttpRequest();

    //readyStateChange -> ready state her değiştiğinde çalışacak
    //ama sadece istek başarılı olduğunda yazılacak
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200 ){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", urlPrepared);
    xhr.send();
}

function getData(url){
    let urlPrepared = prepareUrl(url);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open("GET", urlPrepared)
    xhr.send();
}

getData("https://jsonplaceholder.typicode.com/users");

// id null gelirse hepsini, id gelirse ilgili veriyi getirir
// getComments("https://jsonplaceholder.typicode.com/comments", null);