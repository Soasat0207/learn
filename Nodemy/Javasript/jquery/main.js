// var text = $('body');
// console.log(text);
// var test = $('.test').html();
// console.log(4,test)

// var noidung =`
// <h1 class="test"> hello world </h1>
// <button>hello world</button>
// <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius molestiae necessitatibus aliquam, ducimus exercitationem quod dolor. In, facere cupiditate pariatur, aliquid doloribus nulla consequatur hic placeat, aspernatur minus quae fugiat.</p>`
// console.log(noidung);


$('.btn').click(function(){
    $('body').append(noidung);
    $('body').toggleClass('background');

})
 let number1;
 let number2;
$('#txt_number1').change(function(){
    number1 = $('#txt_number1').val();
    console.log(22,number1);
    $('p').html(number2+number1)
})

$('#txt_number2').change(function(){
    number2 = $('#txt_number2').val();
   console.log(27,number2);
   $('p').html(number2+number1)

})
console.log(29,number1 + number2);
