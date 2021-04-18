let outputScreen=document.querySelector('#output-screen');
let historyScreen=document.querySelector('#history');
function display(num){
    outputScreen.value += num;
    console.log(5,outputScreen.value);
}
function calculate(){
    showHistory();
    outputScreen.value = eval(outputScreen.value)
    console.log(9,outputScreen.value)
    
}
function allClear(){
    outputScreen.value = '';
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
function showHistory(){
    historyScreen.value = outputScreen.value;
}