console.log()
document.querySelector('.celander__job-checklist-input').addEventListener("click", function() {
    console.log(this.value)  
    this.value = 240 - this.value ;
    return this.value ;  
});