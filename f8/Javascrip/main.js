var courses =[
    {
        id: 1,
        name:'javascript',
        coin:250
    },
    {
        id: 2,
        name:'php',
        coin:330
    },
    {
        id: 3,
        name:'ruby',
        coin:770
    },
    {
        id: 4,
        name:'java',
        coin:0
    },
    {
        id: 5,
        name:'reacts',
        coin:120
    }
]
var i = 0
function coinHandler(accumulator,currentValue,currentIndex,origan){
    // i++
    // console.table({
    //     'lượt chạy' :i,
    //     'Biến tích trứ' :accumulator
    // });
    // console.log(currentValue);
    return accumulator + currentValue.coin;
}
// var totalCoin = courses.reduce(coinHandler, 0);
var totalCoin = courses.reduce(function(a,b){
    return a + b.coin;
},0)
console.log(totalCoin);