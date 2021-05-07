/*
bài toán cho 1 mảng user và 1 mảng comment 
in ra comment đó là của user nào 

*/

var user = [
    {
        id: 1,
        name: 'Hiep'
    },
    {
        id: 2,
        name: 'Huy'
    },
    {
        id: 3,
        name: 'Le'
    }

];
var comment = [
    {
        id: 1,
        user_id: 1, 
        content:'hello'
    },
    {
        id: 2,
        user_id: 2, 
        content:'world'
    }

]
function getUsersByIds (userIds){
    return new Promise(function(resolve){
        var result = user.filter(function(a){
            return userIds.includes(a.id)
        })
        setTimeout(function(){
            resolve(result);
        },1000)
       
    },1000)
}

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comment);
        },1000)
    })
}
getComments()
.then(function(comments){
    console.log(comments);
    var userIds = comments.map(function(a){
       return a.user_id;
    })
    return getUsersByIds(userIds)
        .then(function(users){
        console.log(users);
            return {
                user : users ,
                comment:comments
            };
        });
})
.then(function(data){
    console.log(data)
});
