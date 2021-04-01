//bài 1 :
array = [1,5,7,8,9,15 ];
//1.1 // th nếu không phải số nan true fale  
var evenNumber = array.filter(function(x){
    // if( x % 2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return x % 2 == 0 ? true : false;
});
console.log(evenNumber);
//1.2 :  không phải số 
var oddNumber = array.filter(function(x){
    return x % 2 != 0 ? true :false;
});
console.log(oddNumber);
//1.3
var largerNumber = array.filter(function(x){
    return x >= 5? true :false;
});
console.log(largerNumber);
//1.4
var divisibleNumber = array.filter(function(x){
    return x %5 == 0 ? true :false;
});
console.log(divisibleNumber);
//1.5
var increaseNumber = array.filter(function(x){

    if(x > 5){
        return x ;
    }
    else{
        return false;
    }
   
}).map(function(y){
    return y+1;
})
console.log(42,increaseNumber);
//1.6
var copyArray = array.slice(2, array.length);
console.log(copyArray);
//1.7
 array.splice(2,1);
console.log(array);
//1.8 
array.push(17);
console.log(array);
//bài 2 
//tăng dần
array2 = [1,8,5,2,7,6,9,2,6];
array2.sort(function(a,b){
    return a - b;
})
console.log(array2);
// giảm dần
array2.sort(function(a,b){
    return b -a ;
})
console.log(array2);
//bài 3 
arrayPersons = 
[{
	name: 'Trung',
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
    age: 25
},
{
	name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
},
{
	name: 'Nam',
    class: 'Nodemy02',
    dateJoin:'25-01-2020',
    age: 20
}]
console.log(Object.keys(arrayPersons));
console.log(Object.values(arrayPersons));
//3.1
// arrayPersons.sort(function(a,b){
//     return a.age - b.age;
// });
console.log(90,arrayPersons);
//3.3
arrayPersons.sort(function(a,b){
    console.log(93,a.name,new Date(a.dateJoin.slice(6,10000),a.dateJoin.slice(3,5),a.dateJoin.slice(0,2)) )
    return new Date(b.dateJoin.slice(6,10000),b.dateJoin.slice(3,5),b.dateJoin.slice(0,2)) -  new Date(a.dateJoin.slice(6,10000),a.dateJoin.slice(3,5),a.dateJoin.slice(0,2)) ;
    
});
console.log(96,arrayPersons);

console.log(97,typeof arrayPersons[0].dateJoin.slice(0,2))

//3.2
var newArray = arrayPersons.filter(function(x){
    if(x.dateJoin.slice(3,5) < 2 ){
        return x;
    }
    else {
        return false;
    }
});
console.log(110,newArray);
//3.4
 var newArray2 = arrayPersons.map(function(x){
     x.name = x.name.toUpperCase(); 
    return x;
 });
 console.log(115,newArray2);