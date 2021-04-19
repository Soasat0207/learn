const date = new Date();
console.log(date);
var year_current = date.getFullYear();
var months_current = date.getMonth();
function next_month(){
    months_current++;
    if(months_current >=12){
        months_current=0;
        year_current++;
    }
    console.log(months_current);
    console.log(year_current);
}
function pre_month(){
    months_current--;
    if(months_current <0){
        months_current=12;
        year_current--;
    }
    console.log(months_current);
    console.log(year_current);
}
const renderCalendar = function(){
    date.setDate(1);
    console.log(24,months_current);
    const monthDays = document.querySelector('.days');
    console.log(25,monthDays)
    // ngày cuối  cùng trong tháng hiện tại
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() +1,
        0
    ).getDate();
    console.log(34,lastDay);
    //ngày cuối cùng trong tháng trước
    const preLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();
    console.log(37,preLastDay);
    //vị trí hiển thị của ngày cuối cùng trong tháng hiện tại nghĩa là hiển thị ra thứ của ngày cuối cùng trong tháng hiện tại
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth()+1,
        0
    ).getDay();
    console.log(46,lastDayIndex);
    // vị trí hiển thị của ngày đầu tiên trong tháng tiếp theo 
    const nextDays =  6 - lastDayIndex    ;
    console.log(49,nextDays);
    // vị trí mà ngày đầu tiên trong tháng hiển thị nghĩa là thứ ngày đầu tiên trong tháng hiển thị 
    const firsDayIndex = date.getDay();
    console.log(54,firsDayIndex);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    // for (let i = 0; i < 13; i++) {
    //     document.getElementById('month').innerHTML = months[i];
        
    // }
    document.getElementById('month').innerHTML = months[date.getMonth()];
    document.getElementById('year').innerHTML = year_current;
    let days = "";
    for (let x = firsDayIndex; x > 0; x--) {
        days += `<div class="pre-date">${preLastDay - x +1}</div>`;
        
    }
    console.log(lastDay);
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="current-day">${i}</div>`;
        }
        else{
            days += `<div>${i}</div>`;
        }
        
    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-day">${j}</div>`;
        monthDays.innerHTML = days;
    }
};
document.querySelector('.pre').addEventListener('click',function() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});
document.querySelector('.next').addEventListener('click',function() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});
renderCalendar();
function getAllMonth(){
   console.log(year_current);
   
}
function showAllMonth(){
    
}