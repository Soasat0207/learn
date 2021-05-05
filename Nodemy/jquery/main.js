function getInput(){
    let name = $('.name').val();
    let age = $('.age').val();
    console.log(name);
    console.log(age);
    // let p = `
    // <div>
    // <p class="demo" id ="demo">toi ten la ${name} toi dang ${age} tuoi </p>
    // <button class="del">xoa</button>
    // </div>
    // `;
    // $('body').append(p);
    // console.log($('.del').length - 1);
    // $('.del').eq($('.del').length - 1).on('click',function(e){
    //     console.log(this.parentElement);
    //     this.parentElement.remove(); 
    // })
    let thongBao = ''; 
    if (name == '' && age == '') {
        thongBao ='khong de rong';
    }
    else if (age < 8){
        thongBao ='age qua nho';
    }
    else {
        thongBao = 'ok';
    }
    $('.thongbao').html('   ');
    $('.thongbao').append(thongBao);
}
$('.event').on('click',function(e){
    console.log(this);
    // $('.age').attr('type','date');
    
} )
// $('.event').click(function (e) { 
//     console.log('hello world');
    
// });
