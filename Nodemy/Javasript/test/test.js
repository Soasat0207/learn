// Bài 1:

var response = [
    {
      id: "1",
      createdAt: "2021-03-22T05:52:38.521Z",
      name: "Bechtelar",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg",
      content: "ddddd",
      age: 19,
    },
    {
      id: "2",
      createdAt: "2021-03-22T03:46:01.125Z",
      name: "Test",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",
      content: "123456",
      age: 22,
    },
    {
      id: "3",
      createdAt: "2021-03-21T23:56:41.225Z",
      name: "Ludwig Morar",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/_shahedk/128.jpg",
      content: "Personal Loan Account",
      age: 20,
    },
    {
      id: "4",
      createdAt: "2021-03-23T07:19:07.853Z",
      name: "Cicero Reichel",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bolzanmarco/128.jpg",
      content: "back up payment PCI",
      age: 18,
    },
    {
      id: "5",
      createdAt: "2021-03-23T00:57:02.708Z",
      name: "Myrl Bechtelar",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/sbtransparent/128.jpg",
      content: "systems",
      age: 30,
    },
    {
      id: "6",
      createdAt: "2021-03-22T16:29:38.808Z",
      name: "Urban Rogahn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/amayvs/128.jpg",
      content: "enterprise",
      age: 19,
    },
    {
      id: "7",
      createdAt: "2021-03-23T03:43:00.287Z",
      name: "Jody Parisian",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/leehambley/128.jpg",
      content: "Crescent Bedfordshire",
      age: 18,
    },
    {
      id: "8",
      createdAt: "2021-03-23T06:07:12.431Z",
      name: "Madeline Renner",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
      content: "24/365",
      age: 29,
    },
    {
      id: "9",
      createdAt: "2021-03-22T23:13:36.792Z",
      name: "Caroline Senger",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kerihenare/128.jpg",
      content: "ivory functionalities leverage",
      age: 25,
    },
  ];
  
  // a) 0.5đ lấy đuôi của 1 file ảnh // .jpg
  function file_Extension(file,checkId){

    checkFile_Extension = file.filter(function(a){
      if(a.id == checkId){
        return a;
      }
    }).map(function(x){
      x = x.avatar.split('.') ;
      return x[x.length - 1 ];
    }).toString();
  
    return checkFile_Extension;
  }
  console.log(file_Extension(response,1));
  console.log('-----------------------------');
  // b) 0.5đ in ra object thông tin bài đăng của người tên 'Jody Parisian'
  function printContent (responseArray,checkName){

    checkPrintContent = responseArray.filter(function(a){
        if(a.name == checkName){
          return a;
        }
    }).map(function(y){
      return y.content;
    }).toString();
    return checkPrintContent;
  }
  console.log(printContent(response ,'Jody Parisian'));
  console.log('-----------------------------');
  // c) 0.5đ sắp xếp theo thứ tự tuổi tăng dần
  function increaseAge (array_c){
    return  array_c.sort(function(a,b){
      return a.age - b.age;
    })
     
  }
  console.log(increaseAge(response));
  console.log('-----------------------------');
  // d) 1đ sắp xếp theo thứ tự ngày đăng bài tăng dần
  function increaseDate (array_d){
    return  array_d.sort(function(a,b){
      return new Date(a.createdAt) - new Date(b.createdAt);
    })
     
  }
  console.log(increaseDate(response));
  console.log('-----------------------------');
  // e) 1đ In ra tên, tuổi của những người có tuổi bằng nhau
  function sameAge (array_c,callback){
    var arrTrung = callback(array_c)
    var checkSameAge = []
   for(let i=0;i<arrTrung.length;i++){
       var trung = array_c.filter(function(element){
           if(arrTrung[i] === element.age){
               return element;
           }
           
       })
       checkSameAge.push(trung)
   }
   

   return checkSameAge;
  
 }

 function checkAge (array){
   var newArr =  array.map(function(x ,index){
       return x.age;
      
   });
   var result = []

   for(let i = 0; i< newArr.length;i++){
       for(let j = i+1;j < newArr.length;j++){
           if(newArr[i] === newArr[j]){
               result.push(newArr[i])
           }
       }
   }
   return result
 }
 console.log(98,checkAge(response));



 console.log(100,sameAge(response,checkAge));
  // [{name:'Cicero Reichel',age:18},{name:"Jody Parisian",age:18},
  // {name:"Urban Rogahn",age:19},{name:'Bechtelar',age:19}]

  //Bài 2
var arr = [1, 4, 6, 8, 6, 4, 3, 4, 6, 7, 9, 6, 33, 9];
// a) 0.5đ lọc ra các số chẵn trong array
console.log('-----------------------------');
 checkNumber = arr.filter(function(x){
   if (x %2 == 0) {
     return x;
   }
 });
 console.log(checkNumber);
// b) 0.5đ sắp sếp array tăng dần
console.log('-----------------------------');
sortArray = arr.sort(function(a,b){
    return a - b;
});
console.log(sortArray);
console.log('-----------------------------');
// c) 1,5đ lọc trùng array trên trả về array chỉ gồm các số riêng biệt, không trùng
console.log('-----------------------------');
checkArr = arr.filter(function(x,index){
   return arr.indexOf(x) == index ;
});
console.log(checkArr);
console.log('-----------------------------');
// d) 1,5đ tạo ra 1 data chứa thông tin về số lần lặp của các số trong array trên

//        [{so:1, lap: 1 },{so:3, lap: 1},{so: 4, lap:3},{so:6,lap:4},.......]
console.log('-----------------------------');
var a = arr.reduce(function(acc,curr){
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  }
  else{
    acc[curr] += 1;
  }
  return acc;
},{})
console.log(a);

//Bài 3
var data = [
  {
    id: "1",
    birthDay: "1950-09-25T07:27:54.121Z",
    name: "Audie Miller",
    salary: 857,
    dateJoin: "2020-04-03T05:37:05.419Z",
  },
  {
    id: "2",
    birthDay: "1960-02-22T16:30:10.423Z",
    name: "Miss Cleo Senger",
    salary: 484,
    dateJoin: "2021-01-16T10:05:54.122Z",
  },
  {
    id: "3",
    birthDay: "1970-01-24T11:48:04.638Z",
    name: "Reinhold Bradtke",
    salary: 808,
    dateJoin: "2020-11-03T18:22:28.470Z",
  },
  {
    id: "4",
    birthDay: "1980-02-17T03:53:17.939Z",
    name: "Marjorie Labadie",
    salary: 335,
    dateJoin: "2020-04-20T08:48:50.134Z",
  },
  {
    id: "5",
    birthDay: "1990-07-09T23:28:39.699Z",
    name: "Waylon Jaskolski",
    salary: 716,
    dateJoin: "2020-12-20T21:09:00.584Z",
  },
  {
    id: "6",
    birthDay: "1993-11-15T02:35:28.180Z",
    name: "Reginald Brakus",
    salary: 219,
    dateJoin: "2021-01-30T12:56:39.377Z",
  },
];

// a) 1đ thêm thuộc tính tuổi 'age' và thâm niên 'years' cho các nhân viên biết năm nay là 2021
console.log('-----------------------------');
console.log('-----------------------------');
var checkYear = data.filter(function(x){
  if(new Date(x.dateJoin).getFullYear() == 2021){
    x.age = new Date().getFullYear() - new Date(x.birthDay).getFullYear();
    x.year = new Date().getFullYear() - new Date(x.dateJoin).getFullYear();
    return x;
  }
  
});
console.log(checkYear);
// b) 0.5đ loại bỏ những nhân viên trên 60 tuổi
console.log('-----------------------------');
console.log('-----------------------------');
var checkOld = data.filter(function(x){
  if (new Date().getFullYear() - new Date(x.birthDay).getFullYear() <= 60) {
    x.age = new Date().getFullYear() - new Date(x.birthDay).getFullYear();
    return x;
  }
});
console.log(checkOld);
// c) 1đ tăng lương cho nhân viên theo thâm niên, mỗi năm tăng 5% lương
console.log('-----------------------------');
var seniority = data.filter(function(x){
  if (new Date().getFullYear() - new Date(x.dateJoin).getFullYear() > 0) {
    x.year = new Date().getFullYear() - new Date(x.dateJoin).getFullYear();
    x.salary = (x.salary * 0.05 ) + x.salary;
    return x;
  }
});
console.log(seniority);