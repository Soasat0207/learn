// js Thanh menu đóng mở dùng cho mobile 
//khai báo biến 

var header =document.getElementById('header');
var mobileMenu=document.getElementById('mobile-menu');
//khai báo biến để lấy height của header 
var headerHeight = header.clientHeight;
//nếu click vào ĐÓng mở mobile menu
mobileMenu.onclick =function(){
    // console.log(header.clientHeight);
    // nếu isclosed = mới height của header thì 
    var isClosed = header.clientHeight ===headerHeight;
    if(isClosed){
        header.style.height ='auto';
    }
    else{
        header.style.height =null;
    }
}

// console.log(mobileMenu);

//Tự ĐỘng đóng khi chọn menu
//khai báo biến menuItems là tất cả nhưngx thằng thẻ a ở nav có #
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// console.log(menuItems);

for(var i=0 ; i<menuItems.length ; i++){
    //menuItem (chú ý không có s kìa ) là từng thằng có thẻ a 
    var menuItem = menuItems[i];
    var subnav =document.getElementById("subnav");
    // console.log(subnav);
    var clicks =0;
    // console.log(menuItem);
    //click vào phần tử menuItem thì sẽ đóng menu
    
    menuItem.onclick =function(){
        //click vào more thì sẽ hiện ẩn enu cấp 2
        subnav.onclick = function(){
            clicks += 1;
            console.log(clicks);
            if(clicks %2==0){
                document.getElementById('child-subnav').style.display='none';
            }
            else{
                document.getElementById('child-subnav').style.display='block';
            }
            
            
        }
        //isParenMenu là kiểm tra xem cái item đấy có phần tử không và phần tử đó có chứa class là subnav
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParenMenu){
                event.preventDefault();
        }
        else{
            header.style.height =null;
            return clicks=0;
        }
        
    }
     
    

}


// js Thanh menu đóng mở dùng cho mobile





// Khởi tạo 1 hàm toast 
