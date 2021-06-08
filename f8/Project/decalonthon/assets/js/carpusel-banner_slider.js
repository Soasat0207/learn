let slideIndex = 1;
let delay = 10000;
let slides = document.querySelectorAll('.box');
let box = document.querySelectorAll('.trail div');
function plusSlides(n){
    showSlides(slideIndex += n);
    restart();
    animate();
};
function currentSlide(n) {
    showSlides(slideIndex = n);
    restart();
    animate();
}
function showSlides(n){
    
    if(slideIndex > slides.length){
        slideIndex = 1 ;
    }
    for (let i = 0; i < slides.length; i++) {
        box[i].classList.remove('active');
        slides[i].style.display = 'none';
    }
    
    if(slideIndex === slides.length + 1 ){
        slideIndex=1;
    }
    if(slideIndex == 0){
        slideIndex = slides.length;
    }
    box[slideIndex-1].classList.add('active');
    slides[slideIndex-1].style.display = "grid";
}
function randomSlides(){
    if(slideIndex > slides.length){
        slideIndex = 1 ;
    }
    for (let i = 0; i < slides.length; i++) {
        box[i].classList.remove('active');
        slides[i].style.display = 'none';
    }
    
    if(slideIndex === slides.length + 1 ){
        slideIndex=1;
    }
    if(slideIndex == 0){
        slideIndex = slides.length;
    }
    let randomNumber = Math.ceil(Math.random() * slides.length)-1;
    animate();
    box[randomNumber].classList.add('active');
    slides[randomNumber].style.display = "grid";
}
let autoChange = setInterval(randomSlides,delay);
const restart = function(){
    clearInterval(autoChange);
    autoChange = setInterval(randomSlides,delay)
}
//cái này dùng thư viện để viết phải có file nhúng thư viện thì mới chạy nhé
const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.inOut" } });
tl.from(".bg", { x: "-100%", opacity: 0 })
.from(".details p", { opacity: 0 ,x:'30px'}, "-=0.3")
.from(".details h1", { opacity: 0, y: "30px" }, "-=0.3")
.from(".details button", { opacity: 0, y: "-40px" }, "-=0.8")
// function to restart animation
const animate = () => tl.restart();
animate();
showSlides(slideIndex)