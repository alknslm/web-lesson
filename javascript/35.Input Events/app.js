// INPUT EVENTS

//focus
//blur
//copy
//paste
//cut
//select

const todo = document.querySelector("#todoName");

todo.addEventListener("focus", run); //inputa girince
todo.addEventListener("blur", run); //inputtan çıkınca

todo.addEventListener("copy", run); // input içindeki değeri kopyalayınca çalışır
todo.addEventListener("paste", run); // inputa birşey yapıştırınca çalışır
todo.addEventListener("cut", run); // input içinden birşey kesince çalışır
todo.addEventListener("select", run); // input içinde birşeyi imleç ile seçince çalışır


function run(e){
    console.log(e.type);
}