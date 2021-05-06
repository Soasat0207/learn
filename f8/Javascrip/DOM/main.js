var inputValue;
var inputElenment = document.querySelector('input[type = "text"]');
var inputElenmentCheckBox = document.querySelector('input[type = "checkbox"]');
inputElenment.oninput = function(e){
    inputValue = e.target.value;
    console.log(inputValue);
}
inputElenment.onkeyup = function(e){
    console.log(e.keyCode);
}
    
inputElenmentCheckBox.onchange = function(e){
    console.log(e.target.checked);
}
