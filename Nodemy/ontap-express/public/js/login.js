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
function render() {
    $('.data_user').html('');
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
        if(data.status == 200){
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
        if(data.message=="success"){
            $('#login').attr('style','display:none');
            $('#logout').attr('style','display:inline-block')
            render();
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
    location.reload();
}
