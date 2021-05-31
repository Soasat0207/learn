$.ajax({
    url: 'http://localhost:3000',
    type: 'POST'
})
.then((data)=>{
    console.log(data[0]);
    $('body').append(`hello ${data[0].username}` );
})
.catch((error)=>{
    console.log(error);
})