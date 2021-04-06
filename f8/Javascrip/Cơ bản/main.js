Array.prototype.filter2 = function(callback){
    var output =[];
    for(var index in this ){
        if( this.hasOwnProperty(index)){
           var result = callback(this[index], index ,this);
           if (result){
            output.push[this[index]];
           }
        }
    }
    return output ;
}
var courses = [
    {
        name : 'js',
        coin: 680
    },
    {
        name : 'ruby',
        coin: 700
    },
    {
        name : 'php',
        coin: 800
    },
    {
        name : 'react',
        coin: 900
    },
    {
        name : 'node',
        coin: 1000
    }

]
var filterCourses = courses.filter2 (function(course){
    console.log(course);
    return course.coin >700;
});
console.log(filterCourses);