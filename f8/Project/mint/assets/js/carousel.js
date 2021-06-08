const delay = 3000;
let slideIndex = 1;
function plusSlides(n){
    showSlides(slideIndex += 1);
    restart();
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll(".carousel_dot");
    console.log(dots)
    if(slideIndex > slides.length){
        slideIndex = 1 ;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    if(slideIndex === slides.length + 1 ){
        slideIndex=1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.display = "active";
    console.log(dots[slideIndex-1])
}
function ramdomSlides(){
    let slides = document.querySelectorAll('.mySlides');
    if(slideIndex > slides.length){
        slideIndex = 1 ;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    if(slideIndex === slides.length + 1 ){
        slideIndex=1;
    }
    slides[Math.ceil(Math.random() * slides.length)-1].style.display = "block";
}
let autoChange = setInterval(ramdomSlides,delay);
const restart = function(){
    clearInterval(autoChange);
    autoChange = setInterval(ramdomSlides,delay)
}
showSlides(slideIndex);