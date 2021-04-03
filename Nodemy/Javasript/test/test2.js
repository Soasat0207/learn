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



