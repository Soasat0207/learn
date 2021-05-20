Validator({
    form:'#form-1',
    errorSelector:'.form-message',
    errorRed:'invalid',
    rules:[
        Validator.isRequired('#fullname','Vui lòng nhập trường này'),
        Validator.isRequired('#email','Vui lòng nhập trường này'),
        Validator.isEmail('#email','Trường này phải là email'),
        Validator.isRequired('#password','Vui lòng nhập trường này'),
        Validator.minLength('#password', `Mật khẩu phải dài 8 kí tự và chứ 1 kí tự in hoa 1 số và 1 kí tự đặc biệt`),
        // Validator.isRequired('#password_confirmation','Vui lòng nhập trường này'),
        // Validator.isConfirmed('#password_confirmation',function(){
        //      return document.querySelector('#form-1 #password').value;
        // },'Mật Khẩu cần trùng nhau')
    ],
    onSubmit:function(data){
        console.log(data);
        console.log(data.email);
        console.log(data.password);
        if(data.email == 'admin@gmail.com' && data.password == '123123123'){
            window.location.href='http://192.168.2.105:5500/f8/Javascrip/toDoList/';
        }
        else{

        }
    }
})