const delay = 1000;
let slideIndex = 1;
function plusSlides(n){
    showSlides(slideIndex += 1);
    restart();
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
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
    slides[slideIndex-1].style.display = "block";
}
function randomSlides(){
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
let autoChange = setInterval(randomSlides,delay);
const restart = function(){
    clearInterval(autoChange);
    autoChange = setInterval(randomSlides,delay)
}
showSlides(slideIndex);




