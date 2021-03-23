//3
function songuyento(a) {
    check = true;
    if( a < 2){
        check = false;
    }
    else{
        for (let i = 2; i < a-1 ; i++) {
            if (a % i == 0 ) {
                check = false;
                break;
            }
        }
    }
    if (check) {
        console.log('true')
    }   
    else{
        console.log('false');
    }
    
}
songuyento(997)

//4
function dientichhinhtron(r) {
    return  Math.PI * Math.pow(r, 2 ) ;
}
console.log(dientichhinhtron(8));
console.log('----');
array = [1,5,7,8,9,15,8];
//in ra số chẵn cửa mảng
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] % 2 == 0 ) {
        console.log(element);
    }
}
console.log('----');
// in ra số lẻ của mảng 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] % 2 != 0 ) {
        console.log(element);
    }
}
console.log('----');
//in ra các số lơn hơn hoặc bằng 5 của mảng 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] >= 5 ) {
        console.log(element);
    }
}
console.log('----');
//tổng của mảng

for (let i = 0; i < array.length; i++) {
    var temp = 0;
    temp +=array[i];
    console.log(temp);
    return temp;
}
console.log('temp');
