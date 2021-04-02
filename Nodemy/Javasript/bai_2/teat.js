function checkString(str){
    var checkH = str.split('h').length - 1;
    console.log(str.split('h'));
    var checkK =str.split('k').length - 1;
    return checkH;
}
console.log(52,checkString('hello whhhhhhhorld'));
