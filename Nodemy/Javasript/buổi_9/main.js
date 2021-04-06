//bài 1: 10
//bài 2 :undefine
//bài 4
const object = {
    name :"nodemy"
}
object.name ='YA';
console.log(object);
//ba 5
var persons = [{
    name: 'Nam',
    job: 'Dev'
  }, {
    name: 'Duong',
    job: 'Tester'
  }]
for (let i = 0; i < persons.length; i++) {
    const element = persons[i];
    console.log(element.name + ' co job la ' + element.job);
} 

//
var person = {
    name: 'Nam',
    job: 'Dev',
    phone: 0866633805,
    company: 'Nodemy',
    group: ['Nodejs.vn', 'Nodejs Viet Nam'],
    website: 'http://nodemy.vn'
  }
  for( var key in person){
    console.log( key,person[key])
  }