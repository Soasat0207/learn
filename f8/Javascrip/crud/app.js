
var courseApi = 'http://localhost:3000/courses';
function start(){
    getCourses(renderCourses);
    handleCreateForm();
}
start();

//-------------------------
//functions 
function getCourses(callback){
    fetch(courseApi)
    .then(function(response){
        return response.json();
    })
    .then(callback)
}
//-------------------------
function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return`  
        <li class="course-items-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
        </li>`;
    });
    // console.log(courses);
    // console.log(htmls)
    listCoursesBlock.innerHTML = htmls.join('');
}

//-------------------------

function handleCreateForm(){
    var createBtn = document.querySelector('#create-btn')
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData ={
            name: name,
            description:description
        }

        createCourse(formData,function(){
            getCourses(renderCourses); 
        });
    }
    

}


function createCourse(data ,callback){
    var options ={
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    };
    fetch(courseApi , options)
    .then(function(response){
        return response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id){
    var options ={
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
    };
    fetch(courseApi + '/' + id , options)
    .then(function(response){
        return response.json();
    })
    .then(function(){
        var courseItem = document.querySelector('.course-items-' +id);
        if(courseItem){
            courseItem.remove();
        }
    });
}
