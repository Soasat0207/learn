const layOut = document.querySelector('.layout');
const habitTarget = document.querySelectorAll('.habit_tracker-items-target');
const modalClass = document.querySelector('.modal');
const modalClose = document.querySelector('.btn-modal-close');
const modalData = document.querySelector('.modal_data');
const modalAdd = document.querySelector('.btn-modal-add');
const outputData = document.querySelector('.output_data');
const addPlan = document.querySelector('.add_plan-input');
const btnDelPlan = document.querySelector('.btn-modal-del-plan');
const classDecsHabit = document.querySelector('.habit_tracker-header-description');
const inputModalDescription = document.querySelector('.modal_description');
const lblTitle = document.querySelector('.lbl_title');
const inputCheckPlan = document.querySelectorAll('.habit_tracker-items input[type=checkbox]');
const habitTrackerWrapper = document.querySelector('.habit_tracker-wrapper');
const toDoListWrapper = document.querySelector('#root');
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
let countPlan = 0;
function resetClock(){
    let date = new Date();
    let hours = date.getHours() * 30;
    let minutes = date.getMinutes() * 6;
    let seconds = date.getSeconds() * 6;
    hr.style.transform = `rotateZ(${(hours)+(minutes/12)}deg)`;
    mn.style.transform = `rotateZ(${(minutes)}deg)`;
    sc.style.transform = `rotateZ(${seconds}deg)`;
}


function showTodoList() {
    habitTrackerWrapper.setAttribute('style', 'display:none');
    toDoListWrapper.setAttribute('style', 'display:block');
}

function showHabitTracker() {
    toDoListWrapper.setAttribute('style', 'display:none');
    habitTrackerWrapper.setAttribute('style', 'display:block');
}
layOut.addEventListener('click', function (e) {
    hiddenModal();
});
modalClose.addEventListener('click', function (e) {
    hiddenModal();
    controlFunction();
});

function showModal() {
    layOut.setAttribute('style', 'display:block');
    modalClass.setAttribute('style', 'display:block');
}

function hiddenModal() {
    layOut.setAttribute('style', 'display:none');
    modalClass.setAttribute('style', 'display:none');
}

function eventAddPlan(elementPlan) {
    console.log(elementPlan);
    modalAdd.addEventListener('click', function () {
        if (modalData.value == "" && inputModalDescription.value == "") {
            alert('bạn chưa nhập gì');
        } else if (modalData.value == "") {
            elementPlan.innerHTML = inputModalDescription.value;
            hiddenModal();
        } else {
            elementPlan.innerHTML = modalData.value;
            console.log(modalData.value);
            hiddenModal();
            console.log(elementPlan);
        }
    });
}

function eventDelPlan(elementPlan) {
    btnDelPlan.addEventListener('click', function () {
        console.log(elementPlan.parentElement);
        elementPlan.parentElement.remove();
        hiddenModal();
    });
}

function controlFunction() {
    for (let i = 0; i < habitTarget.length; i++) {
        habitTarget[i].addEventListener('dblclick', function (e) {
            const elementPlan = this;
            showModal();
            modalData.setAttribute('style', 'display:block');
            lblTitle.setAttribute('style', 'display:block');
            outputData.innerHTML = this.innerHTML;
            modalData.value = this.innerHTML;
            console.log(modalData.value);
            eventAddPlan(elementPlan);
            eventDelPlan(elementPlan);
        })

    };
}
console.log(inputCheckPlan);

for (let i = 0; i < inputCheckPlan.length; i++) {
    inputCheckPlan[i].addEventListener('click', function (e) {

        if (inputCheckPlan[i].checked) {
            countPlan += 1;
        } else {
            countPlan -= 1;
        }
        document.querySelector('.count_plan').innerHTML = countPlan;
        console.log(countPlan);
    })

}

function descriptionHabit() {
    classDecsHabit.addEventListener('dblclick', function (e) {
        elementdesc = this;
        showModal();
        modalData.setAttribute('style', 'display:none');
        lblTitle.setAttribute('style', 'display:none');
        eventAddPlan(elementdesc);
    })
}

setInterval(() => {
    resetClock()
},1000)
controlFunction();
descriptionHabit();