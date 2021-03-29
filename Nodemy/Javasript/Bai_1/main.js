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
console.log('lon hon 5');
//in ra các số lơn hơn hoặc bằng 5 của mảng 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] >= 5 ) {
        console.log(element);
    }
}
console.log('tong cua mang');

function tinhtong(array) {
    var temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp +=array[i];
        console.log(temp);
        
    }
    return temp;
}
console.log(tinhtong(array));
console.log('tong cac so /5');

function tinhtongcacsochiahetcho5(array) {
    var temp = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 == 0 ) {
            temp +=array[i];
            console.log(temp);
        }
       
        
    }
    return temp;
}
console.log(tinhtongcacsochiahetcho5(array));
console.log('tich 3 so dau');
function tich3sodau(array){
    multiply = 1 ;
    for (let i = 0; i < 3; i++) {
        multiply  *= array[i] ;
            console.log(multiply);
    }
    return multiply;
}
console.log(tich3sodau(array));
console.log('tong 3 so sau');
console.log(array.slice(0,-2))
console.log('phan tu 5');
function searchFive (){
    
}
console.log('Dem so 8 xuat hien bao lan');
var count= 0 ;
for(let i = 0 ; i <array.length; i++){
    if(array[i] == 8){
        count++;
    }
}
console.log(count);
//bài 2
console.log('bai 2');
function dienTich(r){
    return  Math.PI * Math.pow(r, 2 ) ;
}
console.log( dienTich(8)) ;
console.log('bai 3');
var obj = {
    fistName:'Đỗ',
    lastName:'Hao',
}
console.log(obj.fistName + ' ' + obj.lastName);
console.log('bai 4');
var car ={
    hangXe:'BMW',
    gia:300000,
    xuatXu:'duc',
}
car.mauSac ='Mau den';
car.gia =250000;
console.log(car);