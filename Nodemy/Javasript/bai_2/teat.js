var promise1 = new Promise(function(resolve,reject){
    resolve ( Math.floor(Math.random() * (100 - 1 + 1) ) + 1);
})
promise1
.then(function(data){
    console.log(data);
    promise2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(Math.pow(data,2))
        },1000)
    })
    promise3 = new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve(data * 50);
        },2000)
    })
    promise2
    .then(function(data2){
        console.log(data2);
    })
    promise3
    .then(function(data3){
        console.log(data3);
        // if (data2 >  data3 ) {
        //     console.log(data2);
        // }
        // else if(data3 > data2){
        //     console.log(data3);
        // }
    })
    Promise.all([promise3,promise2])
    .then(function(data4){
        console.log(data4);
        console.log(34,data4[0]);
        console.log(35,data4[1]);
        var array = data4.sort(function(a,b){
            return a - b;
        });
        console.log(array[array.length - 1]);
        console.log( data4[0] > data4[1] ? data4[0] :data4[1] );
        
    })

})
.catch(function(err){
    console.log(err)
})

// //bai 1 
// function bai1(a,callback){
//     setTimeout(function()  {
//         var array = [] ;
//         for( var i = 1; i <= 4 ; i++){
//             var x = Math.pow(a,i);
//             console.log(47,x);
//             array.push(x);
//         }

//         // var array =[a, Math.pow(a,2),Math.pow(a,3),Math.pow(a,4) ];
//         callback(array);
//         console.log(array);
//     }, 3000);
// }
// function loc(arr){
//    var newArr = arr.filter(function(a){
//         return a >100 ;
//     })
//     console.log(newArr);
// }
// bai1(10,loc)
var arr =document.querySelectorAll("button");
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element.addEventLister('click',function(){
        element.setAttribute('style','display:none')
    })
    
}