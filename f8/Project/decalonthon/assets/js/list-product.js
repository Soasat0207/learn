let option_product = document.querySelector('.information-product-option');
let product_list = document.querySelector('.information-product-list');
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