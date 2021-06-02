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
let currentPage = 1;
let view = 2;
// lấy ra 2 thằng hiển thị đầu tiên trong trang  và in ra có bao nhiêu phân trang
$.ajax({
    url: `http://localhost:3000/api/account/paginator?page=${currentPage}&view=${view}`,
    type: 'GET'
})
.then((data)=>{
    console.log(data);
    let totalPage =Math.ceil((data.totalPage.length)/view);
    data = data.data; 
    console.log(totalPage );
    $('.content').html('');
    for(let i=0; i<data.length; i++) {
        let item = $(`
        <h1>${data[i].username} : ${data[i].password} : ${data[i].email}</h1>
        <br>
        `);
        $('.content').append(item);
    }
    for(let i = 1; i <= totalPage ; i++){
        console.log(i)
        let item = $(`
            <li class="page-item"><a class="page-link" onclick=loadPage(${i}) href="#">${i}</a></li>
        `)
        $('.pagination').append(item);
    }

})
.catch((error)=>{
    console.log(error);
})
//hàm load page để xử lý click vào nút nào
function loadPage(page){
    currentPage = page;
    $.ajax({
        url: `http://localhost:3000/api/account/paginator?page=${page}&view=${view}`,
        type: 'GET'
    })
    .then((data)=>{
        data = data.data;
        console.log(data);
        $('.content').html('');
        for(let i=0; i<data.length; i++) {
            console.log(data[i]);
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
    console.log(currentPage)
    $.ajax({
        url: `http://localhost:3000/api/account/paginator?page=${currentPage}&view=${view}`,
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
//hàm prev để prev page
function prevPage(){
    currentPage -= 1 ;
    console.log(currentPage)
    if(currentPage > 0){
        $.ajax({
            url: `http://localhost:3000/api/account/paginator?page=${currentPage}&view=${view}`,
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
    else{
        currentPage = 1;
    }

}
