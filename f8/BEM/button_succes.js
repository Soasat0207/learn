// Khởi tạo 1 hàm toast 
function toast({ title = "", message = "", type = "", duration =3000 }) {
    const main = document.getElementById("toast");
    
    if(main){    
        const toast = document.createElement("div");
        // Tự Động Xoá
        const autoRemoveId =setTimeout(function () {
            main.removeChild(toast)
        },duration +1000)
        // click  xoá
        toast.onclick = function (e) {
            console.log(e.target);
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success:'fa fa-check-circle',
            info:'fa fa-exclamation ',
            warning:'fa fa-exclamation-triangle',
            error:'fa fa-exclamation-triangle',
        }
        const icon = icons[type]; 
        const delay = (duration/1000).toFixed(2);
        toast.classList.add("toast",`toast--${type}`);
        toast.style.animation=`slideInLeft ease 1s ,fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                    <div class="toast__icon">
                    <i class="${icon}" aria-hidden="true"></i>
                
                    </div>
                <div class="toast__body">
                    <h3 class="toast__body_title">${title}</h3>
                    <p class="toast__body_text">${message} </p>

                </div>
                <div class="toast__close">
                    <i class="fa fa-times" aria-hidden="true"></i>  
                </div>
                `;
            main.appendChild(toast);
           
            

    }
}

    function showSuccessToast(){
        toast({
            title : 'Success',
            message :'Bạn Đã đăng ký tài khoản F8 Thành Công',
            type : 'success',
            duration : 5000 
        });

    }
    function showErrorToast(){
        toast({
            title : 'Error',
            message :'Có lỗi sảy ra vui lòng liên hệ quản trị viên',
            type : 'error',
            duration : 5000 
        });

    }