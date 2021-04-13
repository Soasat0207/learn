
    // Bài 1//
// function checking (num){
//     if (num >100){
//         console.log(num);
//     }
// }

// function newFunction (a,callback){
//     let arr = [];
//     setTimeout(() => {
//         for(i=1; i <= 4;i++){
//             arr.push(a**i);
//                 }
//         console.log(arr);
        
//         for(i = 0; i < arr.length; i++){
//              callback = checking(arr[i])
//         }
        
//     }, 3000);

// }
// newFunction(10);


        // Bài 2//

        
        
        var promise2 = new Promise(function(resolve, reject){
            setTimeout(function() {
                console.log("hihhi");
                promise1
                .then(function(data){
                 resolve(data**2)
                console.log("object");
            }, 10000);
            })
        })
        promise2
        .then(function(data2){
            console.log(data2);
        })
        console.log("ok");
        var promise1 = new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve( Math.floor(Math.random() * 100  + 1));
            }, 1000);
        })
        promise1
        .then(function(data){
            console.log(data + 'ok');
        })
        
    

        
        