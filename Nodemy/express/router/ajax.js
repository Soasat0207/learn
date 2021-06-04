let currentPage = 1;
let view = 2;
let totalPage = Number;
$.ajax({
    url: 'http://localhost:3000',
    type: 'POST'
})
.then((data)=>{
    console.log(data);
    $('body').append(`hello ${data[0].username}` );
})
.catch((error)=>{
    console.log(error);
})


function changePage(){
// lấy ra 2 thằng hiển thị đầu tiên trong trang  và in ra có bao nhiêu phân trang
if(currentPage < 1 ){
    currentPage = 1;
}
$.ajax({
    url: `http://localhost:3000/api/account/paginator?page=${currentPage}&view=${view}`,
    type: 'GET'
})
.then((data)=>{
    let totalPage =Math.ceil((data.totalPage.length)/view);
    data = data.data; 
    $('.content').html('');
    for(let i=0; i<data.length; i++) {
        let item = $(`
        <h1>${data[i].username} : ${data[i].password} : ${data[i].email}</h1>
        <br>
        `);
        $('.content').append(item);
    }
    for(let i = 1; i <= totalPage ; i++){
        let item = $(`
            <li class="page-item"><a class="page-link" onclick=loadPage(${i}) href="#">${i}</a></li>
        `)
        $('.pagination').append(item);
    }

})
.catch((error)=>{
    console.log(error);
})
}
changePage();

//hàm load page để xử lý click vào nút nào
function loadPage(page){
    currentPage = page;
    $.ajax({
        url: `http://localhost:3000/api/account/paginator?page=${page}&view=${view}`,
        type: 'GET'
    })
    .then((data)=>{
        data = data.data;
        $('.content').html('');
        for(let i=0; i<data.length; i++) {
            let item = $(`
            <h1>${data[i].username} : ${data[i].password} : ${data[i].email}</h1>
            <br>
            `);
            $('.content').append(item);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
// hàm next để next page
function nextPage(){
    currentPage += 1 ;
    if(currentPage <1){
        currentPage = 1;
    }
    if(currentPage > totalPage){
        currentPage = totalPage;
    }
   
    $.ajax({
        url: `http://localhost:3000/api/account/paginator?page=${currentPage}&view=${view}`,
        type: 'GET'
    })
    .then((data)=>{
        totalPage =Math.ceil((data.totalPage.length)/view);
        data = data.data;
        
        $('.content').html('');
        for(let i=0; i<data.length; i++) {
            let item = $(`
            <h1>${data[i].username} : ${data[i].password} : ${data[i].email}</h1>
            <br>
            `);
            $('.content').append(item);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
//hàm prev để prev page
function prevPage(){
    currentPage -= 1 ;
    if(currentPage < 1 ){
        currentPage = 1;
    }
    $.ajax({
        url: `http://localhost:3000/api/account/paginator?page=${currentPage}&view=${view}`,
        type: 'GET'
    })
    .then((data)=>{
        let totalPage =Math.ceil((data.totalPage.length)/view);
        data = data.data; 
        $('.content').html('');
        for(let i=0; i<data.length; i++) {
            let item = $(`
            <h1>${data[i].username} : ${data[i].password} : ${data[i].email}</h1>
            <br>
            `);
            $('.content').append(item);
        }
    
    })
    .catch((error)=>{
        console.log(error);
    })
}
