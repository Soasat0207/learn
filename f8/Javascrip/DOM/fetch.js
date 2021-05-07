var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
.then(function(response){
    console.log(response);
    return response.json();
    //Json.parse :json -> Javascript types
})
.then(function(posts){
    console.log(posts);
    var htmls = posts.map(function(post){
        return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`;
    });
    var html = htmls.join('');
    console.log(document.querySelector('#postBlock'));
    document.querySelector('#postBlock').innerHTML = html;
})