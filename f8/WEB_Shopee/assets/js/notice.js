// khooiw taoj 
function notice({title="",type="",messenger="",duration=5000}){
    const main = document.getElementById('notice');
    if(main){
        const notice = document.createElement('div');
        // xoá cái lớp notice vừa tạo ra
        const autoRemoveId =setTimeout(function () {
            main.removeChild(notice)
        },duration +1000)

        notice.onclick=function(e){
            console.log(e.target);
            if(e.target.closest('.notice__close')){
                 main.removeChild(notice);
                 clearTimeout(autoRemoveId);
            }
        }
        const icons ={
            success:'fa fa-check-circle',
        }
        
        notice.classList.add('notice',`notice--${type}`);
        const delay = (duration/1000).toFixed(2);
        notice.style.animation=`slideInLeft ease 1s ,fadeOut linear 1s ${delay}s forwards`;
        
        icon =icons[type];
        notice.innerHTML=`<div class="notice__icon">
                <i class="${icon}" aria-hidden="true"></i>
            </div>
            <div class="notice__body">
                <h3 class="notice__body-title">${title}</h3>
                <p class="notice__body-text">${messenger}</p>
            </div>
            <div class="notice__close">
                <i class="fa fa-times" aria-hidden="true"></i>  
            </div>
            `;
            main.appendChild(notice);
            
    }


}

function showSuccessNotice(){
    notice({
        title :'success',
        type :'success',
        messenger :'Bạn Đã Đăng Ký Thành Công Tài Khoản Shoppe',
        duration :5000,
    
    });
}