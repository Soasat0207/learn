function openCity (event,cityName){
    // event.classList.add = ('slides__tab-itens-link-active')
    //lấy ra tab-content 
    var tabContent = document.querySelectorAll('.slides__tab-content');
    // console.log(tabContent);
    //lấy ra tab-link
    var tabLink =document.querySelectorAll('.slides__tab-itens-link');
    // console.log(tabLink);

    //duyệt qua lấy từng phân tử của tabContent
    for (let i = 0; i < tabContent.length; i++) {
        //style none hết cho phần tử
        tabContent[i].setAttribute('style','display:none');
    }
    for (let i = 0; i < tabLink.length; i++) {
        //style none hết cho phần tử
        // tabLink[i].className.replace('active','');
        document.getElementById(cityName).setAttribute('style','display:block');

    }
   
}
document.getElementById('slides__tab-default').click();

