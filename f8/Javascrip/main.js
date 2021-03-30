
var formValues =[
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' }
   
]

for(i = 0 ; i < formValues.length ; i++){
    var obj ={}
    var property = ''
    for(  key in formValues[i] ){
        if(key==='field'){
            property = formValues[i][key]
            obj[property]=''
        }else{
            obj[property]=formValues[i][key]
        }
        // console.log(key);
    }
    console.log(obj)
}

    // formValues.forEach(function(x){s
    //     console.log(x);
    // });
 

