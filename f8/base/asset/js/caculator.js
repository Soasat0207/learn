let outputScreen=document.querySelector('#output-screen');
let historyScreen=document.querySelector('#history');
var input =  document.querySelector('#output-screen')
input.setAttribute('value','0');
function display(num){
    var isOperator = checkInput(num);
    var end = outputScreen.value.slice( outputScreen.value.length - 1 , outputScreen.value.length);
    var isOperatorEnd = checkInput(end);
    // if((outputScreen.value === '0' && num == '%')){
    //     outputScreen.value += num;
    // }
    
    if(isOperatorEnd !== isOperator || (isOperator === false && isOperatorEnd === false ) ){
        
        if(outputScreen.value === '0' && isOperator == false ){
            if(outputScreen.value === '0' && num == '%' ){
                input.setAttribute('value','0%');
            }
            else{
                input.setAttribute('value','');
                outputScreen.value += num;
            }
        }
        else{
            outputScreen.value += num;
        }
    }
}
function calculate(){
    showHistory();
    
    if(outputScreen.value == '0%'){
        outputScreen.value = '0'
    } 
  
    else{
        if (outputScreen.value.indexOf('%') > -1 ) {
            outputScreen.value = eval(outputScreen.value.replace('%','/100'));
        
        }
        else{
            outputScreen.value = eval(outputScreen.value);
        }
        
    }
    
    console.log(9,outputScreen.value)
    
}
function allClear(){
    outputScreen.value = '0';
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
function showHistory(){
    historyScreen.value = outputScreen.value;
}
function checkInput(n){ 
   
    console.log(31,n);
    if( n== '+' || n == '-' || n == '/' || n =='*' ){
        return true ;
    }
   
    else{
        return false;
    }
}


// keyCode
document.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.keyCode);
    console.log(typeof(e.which));
    console.log( e.key  );
    if(e.key == 'Enter'){
        calculate();
        console.log('ok');
    }
    // tại sao sử dụng .keycode == 1 thì lại không chạy
    if(e.key == '1' || e.key == '2' || e.key == '+'){
        display(e.key);
    }
});