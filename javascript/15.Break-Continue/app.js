//  Break -> tamamen kırar döngüyü

let sayac = 1;

while(sayac <=10 ){
    console.log(sayac);
    if(sayac == 7){
        break;
    }
    sayac++;
}

// ? Continue -> bir kez kırar döngüyü

let sayacX = 0;
while(sayacX <= 10){

    sayacX++;
    if(sayacX == 8){
        continue;
    }
    console.log(sayacX);
}