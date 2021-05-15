const layOut = document.querySelector('.layout');
const habitTarget = document.querySelectorAll('.habit_tracker-items-target');
const modalClass = document.querySelector('.modal');
const modalClose = document.querySelector('.btn-modal-close');
const modalData = document.querySelector('.modal_data');
const modalAdd = document.querySelector('.btn-modal-add');
const outputData = document.querySelector('.output_data');
const addPlan = document.querySelector('.add_plan-input');

layOut.addEventListener('click', function (e) {
    layOut.setAttribute('style', 'display:none');
    modalClass.setAttribute('style', 'display:none')
});
modalClose.addEventListener('click', function (e) {
    layOut.setAttribute('style', 'display:none');
    modalClass.setAttribute('style', 'display:none')
});
// btnAddPlans.addEventListener('click', function (e) {
//     const addDataPlan = addPlan.value;
//     var node = document.createElement("LI");
//     var textnode = `q`;         
//     node.appendChild(textnode);                              
//     sorTable.appendChild(node);
//     console.log(addDataPlan);
// })



for (let i = 0; i < habitTarget.length; i++) {
    habitTarget[i].addEventListener('dblclick', function (e) {
        const elementPlan = this;
        layOut.setAttribute('style', 'display:block');
        modalClass.setAttribute('style', 'display:block');
        outputData.innerHTML = this.innerHTML;
        modalAdd.addEventListener('click', function (e) {
            if (modalData.value == "") {
                alert('bạn chưa nhập gì')
            }
            else {
                elementPlan.innerHTML = modalData.value;
                    layOut.setAttribute('style', 'display:none');
                    modalClass.setAttribute('style', 'display:none')
            }
            return modalData.value = "";
        });
    })
    
}
function removePlans(){
    habitTarget.empty();
}
