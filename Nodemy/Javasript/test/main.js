//Câu 1 Viết 1 hàm reverse với tham số là 'str' có tác dụng đảo ngược string
// ex : reverse ('Nodemy') ==> ymedon
/**  gợi ý đầu tiên dùng hàm split lấy str ra 
sau  dùng hàm reverse để đảo ngược str và dùng .join để tạo ra str mới */
function reverse(str){
    var changeString = str.split('').reverse().join('');
    return changeString;
}
console.log(reverse('Nodemy'));

// Câu 2:
/**
 * 1. Viết hàm penta có tham số 1 số bất kì, trả về  số đó nhân 5
 *  Vd: penta(6) === 30
 * 2. Viết hàm sumPenta có tham số 1 array và 1 callback function.
 * Hàm sumPenta có chức năng tính tổng array đó,
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumPenta([1, 2, 3 ,4 ,5 ,6], penta) = 105
 */
function penta(x){
    //2.1
    return x * 5 ;
    //2.2
}
console.log(penta(6));
function sumPenta(array_2,x){
    // array_2 = [1,2,3,4,5,6];
    console.log(Array.isArray(array_2));
    if (Array.isArray(array_2) && array_2.length != 0 ) {
        sumArray_2 = array_2.reduce(function(a,b){
            return a + b ;
        });
        console.log(sumArray_2);
        x = penta(sumArray_2);
        console.log(x);
        return x;
    }
    else{
        return 0;
    }
}
console.log(sumPenta([1,2,3,4,5,6]),penta);
// Câu 3:
/**  Viết 1 function có tham số là str, kiểm tra số lương kí tự 'k' và 'h' của str
 * có bằng nhau hay không nếu bằng nhau thì trả về true không thì false
 * ex :  equal_str ('nguyễn khắc trung khải') ==> k = 2, h = 2 kết quả true */
 function checkString(str){
    var checkH = str.split('h').length - 1;
    var checkK =str.split('k').length - 1;
    return (checkH == checkK)?true :false;

}
console.log(checkString('nguyễn khắc trung khải'));

// Câu 4: Viết 1 hàm getExtensionFilename lấy đuôi tên file
// ex : getExtensionFilename('index.html') ==> result : .html
function getExtensionFilename(file){
    return file.split('.');
}
console.log(getExtensionFilename('index.html')[1]);

//--------------------------------------------------------------------------
// Câu 5 : viết function kiểm tra xem str bắt đầu bằng "Nodemy" hay không ?
// ex : checkFirstStr('Nodemy học lập trình') ==> True
function checkFirstStr(str,checkStr){
    return str.startsWith(checkStr);
}
console.log(checkFirstStr('Nodemy học lập trình','Nodemy'));

// Câu 6 : Cho 1 danh sách học viên Nodemy là 1 arr như sau:
/**
 * Viết 1 hàm getTopStudents trả về arr gồm tên 3 người có điểm cao nhất xếp theo thứ tự giảm dần
 * Gợi ý dùng hàm sort
 * relust ==> [ 'Minh' , 'Phương , 'Duy ]
 */

var list_students=[
    {
        name : 'Minh' ,
        point : 10
    },
    {
        name : 'Phương',
        point :7
    },
    {
        name : 'Duy' ,
        point :9
    }
 ];

 function getTopStudents(charts){
    return charts.sort(function(a,b){
        return b.point - a.point ;
    });
 }
 console.log(getTopStudents(list_students))

// Câu 7 :
/**
 * Viết hàm transform có tham số 1 array và 1 function callback.
 * - Khai báo 1 biến result có giá trị là 1 array trống []
 * - Lặp qua từng phần tử trong array đầu vào, truyền giá trị từng phần tử vào hàm callback
 * - được kết quả bao nhiêu thì push vào array result ở trên
 * - return result array
 * ex : transform([1,2,3,4,5],double) //kết quả: [ 2, 4, 6, 8, 10 ]
 */
function transform(array_7, myCallback){
    var result = [];
    result = array_7.map(function(x){
        myCallback = double(x);
        return myCallback ;
    })
    return result;
}
function double(a){
    return a * 2;
}
console.log(transform([1,2,3,4,5]));
//Câu 8 : Cho 1 danh sách các sản phẩm viết 1 hàm truyền vào 2 tham số,
// 1. danh sách sản phẩm
// 2. số lượng
// trả về các sản phẩm có số lượng đạt yêu cầu
// ex : filterProductsByCategoryId(listProducts, 3000)
/**
  * result :
  *
  { id: 3, amountProduct: 3000, name: 'Coca cola' },
  { id: 7, amountProduct: 3000, name: 'Nước cam Twister' },    
  { id: 9, amountProduct: 3000, name: 'Nước tăng lực Compact' }
  */
 var product_list=[
    {
        id: 3,
        amountProduct: 3000,
        name: 'Coca cola' 
    },
    { 
        id: 7,
        amountProduct: 3000,
        name: 'Nước cam Twister' 
    },    
    { 
        id: 9,
        amountProduct: 1000,
        name: 'Nước tăng lực Compact'
    },
    { 
        id: 10,
        amountProduct: 2000,
        name: 'Nước tăng '
    }
 ]
 function filterProductsByCategoryId(product_list,check_amountProduct){

    var checkProduct = product_list.filter(function(a){
        if(a.amountProduct == check_amountProduct){
            return a;
        }
    });
    return checkProduct;
 }
 console.log(filterProductsByCategoryId(product_list,3000));
 // Câu 9: /**
//  Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
// * 'N' hoặc 'n' -> 1
// * 'O' hoặc 'o' -> 2
// * 'D' hoặc 'd' -> 3
// * 'E' hoặc 'e' -> 4
// * 'M' hoặc 'm' -> 5
// * 'Y' hoặc 'y' -> 6
// *  còn lại -> 0
// */
function trasform(array_9){
    var alphabetic = array_9.map(function(x){
        switch(x){
            case 'n' :
                return 1;
                break;
            case 'N' :
                return 1;
                break;
            case 'o' :
                return 2;
                break;
            case 'O' :
                return 2;
                break; 
            case 'd' :
                return 3;
                break;
            case 'D' :
                return 3;
                break; 
            case 'e' :
                return 4;
                break;
            case 'E' :
                return 4;
                break; 
            case 'm' :
                return 5;
                break;
            case 'M' :
                return 5;
                break; 
            case 'y' :
                return 6;
                break;
            case 'Y' :
                return 6;
                break;     
            default:
                return 0;
                break;
        }
    })
    return alphabetic;
}
console.log(trasform(['n', 'N', 'o', 'O', 'd' , 'D' , 'E', 'e','m', 'M','y','y','a','s','wq']));
// Câu 10 :
/**
 * viết 1 hàm trigonometric trả về 3 giá trị của sin cos tan của 1 một số nhập vào
 * yêu cầu lấy 3 số sau dấu . gợi ý : toFixed() method
 * ex : trigonometric (20) ==> [ '0.913', '0.408', '2.237' ]
 */
function trigonometric(x){
    console.log(Math.sin(x).toFixed(3)) ;
    console.log(Math.cos(x).toFixed(3)) ;
    console.log(Math.tan(x).toFixed(3)) ;
}
trigonometric(90);
// Câu 11: viết 1 hàm random truyền vào 2 tham số max min
// có chức năng random tham số do người dùng nhập vào ví dụ random (0,100) từ 1 tới 100
function ramdom(max , min){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(ramdom(0,100));
// Câu 12
/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math 
  */
 function positiveNumber(array_12){
        chageArray = array_12.map(function(x){
            return Math.abs(x); ;
        })
        return chageArray;
 }
 console.log(positiveNumber([-1,-2,-3,-4,-5,-6,-7,-8,-9]));
 // Câu 13 :
/**
 * Viết hàm balanceTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không?
 */
function balanceTriangle(a,b,c){
//    if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
//     return 'tam giac vuong tai c';
//    } 
//    else if(Math.pow(c,2) + Math.pow(b,2) == Math.pow(a,2)){
//     return 'tam giac vuong tai a';
//    }
//    else if( Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2)){
//     return 'tam giac vuong tai b';
//     }   
//    else{
//     return false;
//    }

    return Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) || Math.pow(c,2) + Math.pow(b,2) == Math.pow(a,2) || Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2) ?  'là tam giác vuông' : 'Không phải tam giác vuông';
}
console.log(balanceTriangle(5,4,3));
function triangle(array_13){
    check_triangle = array_13.filter(function(x){
        if(x > 0 ){
            return x;
        }
        else {
            return false;
        }
    }).map(function(y){
        return y;
    });
    if(check_triangle.length == 3){
        if(check_triangle[0] + check_triangle[1] > check_triangle[2] && check_triangle[0] + check_triangle[2] > check_triangle[1] && check_triangle[2] + check_triangle[1] > check_triangle[0]){
            return Math.pow(check_triangle[0],2) + Math.pow(check_triangle[1],2) == Math.pow(check_triangle[2],2) || Math.pow(check_triangle[2],2) + Math.pow(check_triangle[1],2) == Math.pow(check_triangle[0],2) || Math.pow(check_triangle[0],2) + Math.pow(check_triangle[2],2) == Math.pow(check_triangle[1],2) ?  'là tam giác vuông' : 'Không phải tam giác vuông';
        }
        else{
            return 'Không phải là tam giác';
        }
    }

    
    return check_triangle;
}
console.log(triangle([3,4,5]))