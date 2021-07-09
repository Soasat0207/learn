function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  var delete_cookie = function(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };
function request(){
    $('.data_request').html('')
    $.ajax({
        url:'http://localhost:3000/api/resDelete',
        type:'GET',
    })
    .then((data)=>{
        data.map((data)=>{
            console.log(data);
            let div =``;
            div =`
            <div">
                <p>${data.idUserRequest.username}</p>
                <input  disabled value ='${data.idUserDelete.username}'></input>
                <input disabled value ='${data.idUserDelete.password}'></input>
                <input disabled value ='${data.idUserDelete.role}'></input>
                <button class="btn"  onclick="deleteUser('${data.idUserDelete._id}');deleteRequest('${data._id}')">Xác nhận</button>
                <button class="btn-deleteRequest"  onclick="deleteRequest('${data._id}')" >Xoá yêu cầu</button>
            </div>
            `;
            $('.data_request').append(div);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
}

function render() {
    $('.data_user').html('');
    $('#username').val('');
    $('#password').val('');
    $.ajax({
        url:'http://localhost:3000/api/user',
        type:'GET',
    })
    .then((data)=>{
        data.map((data)=>{
            let div =``;
            div =`
            <div class="checkinput ${data._id}">
                <input class="data_username" placeholder='${data.username}' disabled value ='${data.username}'></input>
                <input class="data_password" placeholder='${data.password}'disabled value ='${data.password}'></input>
                <input class="data_role" placeholder='${data.role}'disabled value ='${data.role}'></input>
                <button class="btn"  onclick="deleteUser('${data._id}')" >X</button>
                <button class="btn_updateInput btn_updateInput_${data._id}" onclick="updateInput('${data._id}')" >Update</button>
                <button style="display:none" class="btn_update" onclick="updateUser('${data._id}')" >Xác Nhận</button>
            </div>
            `
            $('.data_user').append(div);
            dbUpdateInput(data._id);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
}
function renderUser(idUser){
    $('.data_user').html('');
    $('#username').val('');
    $('#password').val('');
    $.ajax({
        url:'http://localhost:3000/api/user',
        type:'GET',
    })
    .then((data)=>{
        data.map((data)=>{
            let div =``;
            div =`
            <div class="checkinput ${data._id}">
                <input class="data_username" placeholder='${data.username}' disabled value ='${data.username}'></input>
                <button class="request" onclick="requestDelete('${data._id}','${idUser}')" >X</button>
            </div>
            `
            $('.data_user').append(div);
            dbUpdateInput(data._id);
        })
    })
    .catch((error)=>{
        console.log(error);
    })   
}
function requestDelete(idDelete,idUser){
    $.ajax({
        url:'http://localhost:3000/api/resDelete',
        type:'POST',
        data:{
            idUserRequest:idUser,
            idUserDelete:idDelete,
        }
    })
    .then((data)=>{
        if(data){
            request();
        }
    })
    .catch((error)=>{
        console.log(error);
    })

}
function create(){
    let username = $('#username').val();
    let password = $('#password').val();
    let role = $('#role').val();
    $.ajax({
        url:'http://localhost:3000/api/user',
        type:'POST',
        data:{
            username:username,
            password:password,
            role: role,
        }
    })
    .then((data)=>{
        console.log(data);
        if(data.message == 'tài khoản đã tồn tại'){
            $('#username').val('');
            $('#password').val('');
            $('#role').val('');
            alert(data.message);
        }
        if(data.status == 200){
            alert(data.message);
            render();
            $('#username').val('');
            $('#password').val('');
            $('#role').val('');
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}
function deleteUser(id){
    $.ajax({
        url:'http://localhost:3000/api/user',
        type:'DELETE',
        data:{
            id:id,
        }
    })
    .then((data)=>{
        if(data.status == 200){
            render();
        }
      })
    .catch((error)=>{
        console.log(error);
    })
}

function deleteRequest(id){
    $.ajax({
        url:'http://localhost:3000/api/resDelete',
        type:'DELETE',
        data:{
            id:id,
        }
    })
    .then((data)=>{
        if(data.status == 200){
            request();
        }
      })
    .catch((error)=>{
        console.log(error);
    })
}
function updateUser(id){
    let username =  $(`.${id}`).children('input').eq(0).val();
    let password =  $(`.${id}`).children('input').eq(1).val();
    let role =  $(`.${id}`).children('input').eq(2).val();
    $.ajax({
        url:'http://localhost:3000/api/user',
        type:'PUT',
        data:{
            id:id,
            username:username,
            password:password,
            role:role,
        }
    })
    .then((data)=>{
        if(data.status == 200){
          render();
        }
      })
    .catch((error)=>{
        console.log(error);
    })
}
function updateInput(id){
    let enableInput = $(`.${id}`).children('input');
    $(`.checkinput`).children('input').attr("disabled", true);
    $(`.btn_updateInput`).attr('style','display:inline-block');
    $(`.btn_update`).attr('style','display:none')
    $(`.${id}`).children('.btn_update').attr('style','display:inline-block');
    $(`.btn_updateInput_${id}`).attr('style','display:none');
    enableInput.attr("disabled", false)
}
function dbUpdateInput(id){
    $(`.${id}`).dblclick(()=>{
        updateInput(id);
    })
}
function find(){
    let username = $('#username').val();
    let password = $('#password').val();
    let role = $('#role').val();
    $('.data_user').html('');
    $.ajax({
        url:'http://localhost:3000/api/user/find',
        type:'POST',
        data:{
            username:username,
            password:password,
            role: role,
        }
    })
    .then((data)=>{
        console.log(data);
        data.map((data)=>{
            let div =``;
            div =`
            <div class="checkinput ${data._id}">
                <input class="data_username" placeholder='${data.username}' disabled value ='${data.username}'></input>
                <input class="data_password" placeholder='${data.password}'disabled value ='${data.password}'></input>
                <input class="data_role" placeholder='${data.role}'disabled value ='${data.role}'></input>
                <button class="btn"  onclick="deleteUser('${data._id}')" >X</button>
                <button class="btn_updateInput btn_updateInput_${data._id}" onclick="updateInput('${data._id}')" >Update</button>
                <button style="display:none" class="btn_update" onclick="updateUser('${data._id}')" >Xác Nhận</button>
            </div>
            `
            $('.data_user').append(div);
            dbUpdateInput(data._id);
            $('#username').val('');
            $('#password').val('');
        })
    })
    .catch((error)=>{
        location.reload(false);
        // history.go(0)
        console.log(error);
    })
}
function findUser(){
    let username = $('#username').val();
    let password = $('#password').val();
    let role = $('#role').val();
    $('.data_user').html('');
    $.ajax({
        url:'http://localhost:3000/api/user/find',
        type:'POST',
        data:{
            username:username,
            password:password,
            role: role,
        }
    })
    .then((data)=>{
        console.log(data);
        data.map((data)=>{
            let div =``;
            div =`
            <div class="checkinput ${data._id}">
                <input class="data_username" placeholder='${data.username}' disabled value ='${data.username}'></input>
            </div>
            `
            $('.data_user').append(div);
            dbUpdateInput(data._id);
            $('#username').val('');
            $('#password').val('');
        })
    })
    .catch((error)=>{
        location.reload(false);
        // history.go(0)
        console.log(error);
    })
}
function login(){
    let username = $('#username').val();
    let password = $('#password').val();
    let role = $('#role').val();
    $.ajax({
        url:'http://localhost:3000/api/user/check',
        type:'POST',
        data:{
            username:username,
            password:password,
            role: role,
        }
    })
    .then((data)=>{
        setCookie('token',data.token,1);
        console.log(data)  
        if(data.data.role=="user"){
            $('#login').attr('style','display:none');
            $('#logout').attr('style','display:inline-block');
            $('.btn-create').attr('style','display:none');
            $('.btn-find-user').attr('style','display:inline-block');
            renderUser(data.data._id);
            request()
            alert(data.message);
        }
        if(data.data.role=="admin"){
            $('#login').attr('style','display:none');
            $('#logout').attr('style','display:inline-block');
            $('.btn-create').attr('style','display:inline-block');
            $('.btn-find-admin').attr('style','display:inline-block');
            render();
            request()
            alert(data.message);
        }
        
    })
    .catch((error)=>{
        
        console.log(error);
    })
}
function logout(){
    delete_cookie('token');
    $('#login').attr('style','display:inline-block');
    $('#logout').attr('style','display:none');
    $('.btn-create').attr('style','display:none');
    $('.btn-find-admin').attr('style','display:none');
    $('.btn-find-user').attr('style','display:none');
    location.reload();
}
function checklogin(){
    let token = getCookie('token')
    $.ajax({
        url:'http://localhost:3000/api/user/checkcookie',
        type:'POST',
        data:{
            token:token,
        }
    })
    .then((data)=>{ 
        if(data.role =="admin"){
            $('#login').attr('style','display:none');
            $('#logout').attr('style','display:inline-block');
            $('.btn-create').attr('style','display:inline-block');
            $('.btn-find-admin').attr('style','display:inline-block');
            render();
            request();
        }
        if(data.role =="user"){
            $('.data_password').attr('style','display:none');
            $('#login').attr('style','display:none');
            $('#logout').attr('style','display:inline-block');
            $('.btn-create').attr('style','display:none');
            $('.btn-find-user').attr('style','display:inline-block');
            renderUser(data._id);
        }
        
    })
    .catch((error)=>{
        console.log(error);
    })
}
checklogin();
