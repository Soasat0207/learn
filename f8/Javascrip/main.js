var courses =[
    {
        id: 1,
        name:'javascript',
        coin:0
    },
    {
        id: 2,
        name:'php',
        coin:0
    },
    {
        id: 3,
        name:'ruby',
        coin:0
    },
    {
        id: 4,
        name:'java',
        coin:0
    },
    {
        id: 5,
        name:'reacts',
        coin:0
    }
]
function courseHandle(course , index ,originArray){
    return{
        id:course.id,
        name:`khoa hoc: ${course.name}`,
        coin:course.coin,
        coinText:`Gia: ${course.coin}`,
        index:index,
        originArray:originArray
    }
}
var newCourses = courses.map(courseHandle);
console.log(newCourses);