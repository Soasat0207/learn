let option_product = document.querySelector('.information-product-option');
let product_list = document.querySelector('.information-product-list');
let product_thumbnail_img = document.querySelectorAll('.product_gallert-thumbnails-img');
let product_gallert_slider_img = document.querySelector('.product_gallert-slider-img')
option_product.addEventListener('click',()=>{
    console.log(product_list.style.display);
    if(product_list.style.display == ""){
        product_list.setAttribute('style','display:flex')
    }
    else if(product_list.style.display == "none"){
        product_list.setAttribute('style','display:flex')
    }
    else{
        product_list.setAttribute('style','display:none')
    }  
})

console.log(product_thumbnail_img);
Array.prototype.map.call(product_thumbnail_img,(product_thumbnail_img)=>{
    product_thumbnail_img.addEventListener('click',()=>{
        console.log(product_gallert_slider_img);
        product_gallert_slider_img.setAttribute('src',`${product_thumbnail_img.getAttribute('src')}`)
    })
})
let slideIndex = 1;
let value = 0;
function plusSlides(n){
    value -= 100;
    // showSlides(slideIndex += n);
    // console.log(slideIndex);
    for (let i = 0; i < product_thumbnail_img.length; i++) {
        product_thumbnail_img[i].style.transform = `translateX(${value}%)`;
    }
    
}
function showSlides(n){
    if(slideIndex > product_thumbnail_img.length){
        slideIndex = 1 ;
    }
    for (let i = 0; i < product_thumbnail_img.length; i++) {
        product_thumbnail_img[i].style.display = 'none';
    }
    
    if(slideIndex === product_thumbnail_img.length + 1 ){
        slideIndex=1;
    }
    if(slideIndex == 0){
        slideIndex = product_thumbnail_img.length;
    }
    console.log(product_thumbnail_img[slideIndex]);
    product_thumbnail_img[slideIndex-1].style.display = "block";
    product_thumbnail_img[slideIndex].style.display = "block";
    product_thumbnail_img[slideIndex+1].style.display = "block";
}