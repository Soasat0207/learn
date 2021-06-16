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
                <input class="data_username" placeholder='${data.username} ' disabled></input>
                <input class="data_password" placeholder='${data.password}'disabled></input>
                <input class="data_role" placeholder='${data.role}'disabled></input>
                <button class="btn"  onclick="deleteUser('${data._id}')" >X</button>
                <button class="btn_updateInput btn_updateInput_${data._id}" onclick="updateInput('${data._id}')" >Update</button>
                <button style="display:none"  class="btn_update" id="${data._id}" onclick="updateUser('${data._id}')" >Xác Nhận</button>
            </div>
            `
            $('.data_user').append(div);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
}
render();
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
    let username = $(`#${id}`).parent().children('input').eq(0).val();
    let password = $(`#${id}`).parent().children('input').eq(1).val();
    let role = $(`#${id}`).parent().children('input').eq(2).val();

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
    let enableInput =  $(`#${id}`).parent().children('input');
    $(`.checkinput`).children('input').attr("disabled", true);
    $(`.btn_updateInput`).attr('style','display:inline-block');
    $(`.btn_update`).attr('style','display:none')
    $(`#${id}`).attr('style','display:inline-block');
    $(`.btn_updateInput_${id}`).attr('style','display:none');
    enableInput.attr("disabled", false)

}