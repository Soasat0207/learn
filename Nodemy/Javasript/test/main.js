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
    var checkH = str.split('h').length;
    return checkH;
}
console.log(52,checkString('hello world'));

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
 var a = [1,2,7,8,4,9]
 function getTopStudents(charts){
    return charts.sort((a,b) => b.point - a.point);
 }
 console.log(getTopStudents(list_students))

