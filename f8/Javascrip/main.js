var courses =[
    {
        id: 1,
        name:'javascript',
        coin:200
    },
    {
        id: 2,
        name:'php',
        coin:1
    },
    {
        id: 3,
        name:'ruby',
        coin:1
    },
    {
        id: 4,
        name:'java',
        coin:45
    },
    {
        id: 5,
        name:'reacts',
        coin:23
    }
]
//callback : hàm truyền vào dưới dạng tham số
//duyệt qua từng phần tử của mảng chỉ cần 1 phần tử sẽ trả về true
var isFree = courses.some(function(course ,index){
    return course.coin === 0;
});
console.log(isFree);