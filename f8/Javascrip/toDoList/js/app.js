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
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
let elementPlan;
let countPlan = 0;
// check nếu mà có currentTheme 
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

function resetClock() {
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
function controlFunction() {
    habitTarget.forEach(function element(element) {
        element.addEventListener('dblclick', function (e) {
            console.log(element);
            showModal();
            inputModalDescription.setAttribute('style', 'display:block');
            lblTitle.setAttribute('style', 'display:block');
            outputData.innerHTML = element.innerHTML;
            modalData.value = element.innerHTML;
            elementPlan = element;
            console.log(elementPlan)

        })
    })
};
modalAdd.addEventListener('click', function () {
    console.log(elementPlan)
    if (modalData.value == "" && inputModalDescription.value == "") {
        alert('bạn chưa nhập gì');
    } else if (modalData.value == "") {
        elementPlan.innerHTML = inputModalDescription.value;
        hiddenModal();
    } else {
        console.log(elementPlan)
        elementPlan.innerHTML = modalData.value;
        hiddenModal();
    }
    console.log(elementPlan.innerHTML);
    // localStorage.setItem('targetTitle', elementPlan.innerHTML);
});
btnDelPlan.addEventListener('click', function () {
    console.log(elementPlan.parentElement);
    elementPlan.parentElement.remove();
    hiddenModal();
});







function descriptionHabit() {
    classDecsHabit.addEventListener('dblclick', function (e) {
        elementdesc = this;
        showModal();
        modalData.setAttribute('style', 'display:none');
        lblTitle.setAttribute('style', 'display:none');
        eventAddPlan(elementdesc);
    })
}
toggleSwitch.addEventListener('change', switchTheme);
setInterval(() => {
    resetClock()
}, 1000)
controlFunction();
descriptionHabit();


// count plant


const checkPlanMonday = document.querySelectorAll('.habit_tracker-items input[name=Monday][type=checkbox]');
let countPlanMonday = 0;
const checkPlanDayMonday = document.querySelector('.checkPlanDay[name=Monday]');
checkPlanDayMonday.innerHTML = localStorage.getItem('countPlanMonday');
for (let i = 0; i < checkPlanMonday.length; i++) {
    checkPlanMonday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanMonday += 1;
        } else {
            countPlanMonday -= 1;
        }
        checkPlanDayMonday.innerHTML = countPlanMonday;
        localStorage.setItem('countPlanMonday', countPlanMonday);
    })
}

const checkPlanTuesday = document.querySelectorAll('.habit_tracker-items input[name=Tuesday][type=checkbox]');
let countPlanTuesday = 0;
const checkPlanDayTuesday = document.querySelector('.checkPlanDay[name=Tuesday]');
checkPlanDayTuesday.innerHTML = localStorage.getItem('countPlanTuesday');
for (let i = 0; i < checkPlanTuesday.length; i++) {
    checkPlanTuesday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanTuesday += 1;
        } else {
            countPlanTuesday -= 1;
        }
        checkPlanDayTuesday.innerHTML = countPlanTuesday;
        localStorage.setItem('countPlanTuesday', countPlanTuesday);
    })
}

const checkPlanWednesday = document.querySelectorAll('.habit_tracker-items input[name=Wednesday][type=checkbox]');
let countPlanWednesday = 0;
const checkPlanDayWednesday = document.querySelector('.checkPlanDay[name=Wednesday]');
checkPlanDayWednesday.innerHTML = localStorage.getItem('countPlanWednesday');
for (let i = 0; i < checkPlanWednesday.length; i++) {
    checkPlanWednesday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanWednesday += 1;
        } else {
            countPlanWednesday -= 1;
        }
        checkPlanDayWednesday.innerHTML = countPlanWednesday;
        localStorage.setItem('countPlanWednesday', countPlanWednesday);
    })
}
const checkPlanThursday = document.querySelectorAll('.habit_tracker-items input[name=Thursday][type=checkbox]');
let countPlanThursday = 0;
const checkPlanDayThursday = document.querySelector('.checkPlanDay[name=Thursday]');
checkPlanDayThursday.innerHTML = localStorage.getItem('countPlanThursday');
for (let i = 0; i < checkPlanThursday.length; i++) {
    checkPlanThursday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanThursday += 1;
        } else {
            countPlanThursday -= 1;
        }
        checkPlanDayThursday.innerHTML = countPlanThursday;
        localStorage.setItem('countPlanThursday', countPlanThursday);
    })
}

const checkPlanFriday = document.querySelectorAll('.habit_tracker-items input[name=Friday][type=checkbox]');
let countPlanFriday = 0;
const checkPlanDayFriday = document.querySelector('.checkPlanDay[name=Friday]');
checkPlanDayFriday.innerHTML = localStorage.getItem('countPlanFriday');
for (let i = 0; i < checkPlanFriday.length; i++) {
    checkPlanFriday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanFriday += 1;
        } else {
            countPlanFriday -= 1;
        }
        checkPlanDayFriday.innerHTML = countPlanFriday;
        localStorage.setItem('countPlanFriday', countPlanFriday);
    })
}
const checkPlanSaturday = document.querySelectorAll('.habit_tracker-items input[name=Saturday][type=checkbox]');
let countPlanSaturday = 0;
const checkPlanDaySaturday = document.querySelector('.checkPlanDay[name=Saturday]');
checkPlanDaySaturday.innerHTML = localStorage.getItem('countPlanSaturday');
for (let i = 0; i < checkPlanSaturday.length; i++) {
    checkPlanSaturday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanSaturday += 1;
        } else {
            countPlanSaturday -= 1;
        }
        checkPlanDaySaturday.innerHTML = countPlanSaturday;
        localStorage.setItem('countPlanSaturday', countPlanSaturday);
    })
}
const checkPlanSunday = document.querySelectorAll('.habit_tracker-items input[name=Sunday][type=checkbox]');
let countPlanSunday = Number();
const checkPlanDaySunday = document.querySelector('.checkPlanDay[name=Sunday]');
checkPlanDaySunday.innerHTML = localStorage.getItem('countPlanSunday');
let checkedItems;


for (let i = 0; i < checkPlanSunday.length; i++) {
    checkPlanSunday[i].addEventListener('click', function (e) {
        if (e.target.checked) {
            countPlanSunday += 1;
            localStorage.setItem('arrElementSunday', i);
        } else {
            countPlanSunday -= 1;
        }
        checkPlanDaySunday.innerHTML = countPlanSunday;
        localStorage.setItem('countPlanSunday', countPlanSunday);
        localStorage.setItem('checked', e.target.checked);
        
    })
}
// checkPlanSunday.forEach(function checkInputPlanDay(element){
//     element.addEventListener('click',function(e){
//         console.log(element);
//         if (e.target.checked) {
//             console.log(e.target.checked);
//             countPlanSunday += 1;

//         } else {
//             countPlanSunday -= 1;

//         }
//         checkPlanDaySunday.innerHTML = countPlanSunday;
//         element = checkedItems;
//         localStorage.setItem('countPlanSunday', countPlanSunday);
        
//     })
// })
console.log(localStorage.getItem('arrElementSunday'));
if(localStorage.getItem('checked')){
    console.log('ok')
    // checkPlanSunday[0].setAttribute('checked', 'checked');
}








