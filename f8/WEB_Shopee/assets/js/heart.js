function drop_heart(event){
    console.log(event.path);
    var drop_heart = event;

    var drop_heart = document.getElementById(event.path[1].id);
    const check_heart = document.querySelector("#" + event.path[1].id);
    

    if(check_heart.classList.contains("home-product-items-like-liked")){
        drop_heart.classList.remove("home-product-items-like-liked");
    }
    else{
        drop_heart.classList.add("home-product-items-like-liked");
    }

    
}