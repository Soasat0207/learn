const date = new Date();
var year_current = date.getFullYear();
var months_current = date.getMonth();
const renderCalendar = function() {
date.setDate(1);
//lấy ra days
const monthDays = document.querySelector(".days");
// ngày cuối  cùng trong tháng hiện tại
const lastDay = new Date(
  year_current,
  months_current + 1,
  0
).getDate();
 //ngày cuối cùng trong tháng trước
const prevLastDay = new Date(
  year_current,
  months_current,
  0
).getDate();
  // vị trí mà ngày đầu tiên trong tháng hiển thị nghĩa là thứ ngày đầu tiên trong tháng hiển thị 
const firstDayIndex = date.getDay();
//vị trí hiển thị của ngày cuối cùng trong tháng hiện tại nghĩa là hiển thị ra thứ của ngày cuối cùng trong tháng hiện tại
const lastDayIndex = new Date(
  year_current,
  months_current + 1,
  0
).getDay();
 // vị trí hiển thị của ngày đầu tiên trong tháng tiếp theo 
const nextDays = 7 - lastDayIndex - 1;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.querySelector(".date h1").innerHTML = months[months_current];
document.querySelector('.header__calendar-month').innerHTML = months[months_current];
document.querySelector(".date p").innerHTML = year_current;
document.querySelector(".header__calendar-year").innerHTML = year_current;
let days = "";

for (let x = firstDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  monthDays.innerHTML = days;
}

for (let i = 1; i <= lastDay; i++) {
  if (
    i === new Date().getDate() &&
    months_current === new Date().getMonth()
  ) {
    days += `<div class="today">${i}</div>`;
    monthDays.innerHTML = days;
  } else {
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
  }
}

for (let j = 1; j <= nextDays; j++) {
  days += `<div class="next-date">${j}</div>`;
  monthDays.innerHTML = days;
}
};

document.querySelector(".prev").addEventListener("click", function() {

date.setMonth(months_current - 1);
renderCalendar();
});

document.querySelector(".next").addEventListener("click", function() {
date.setMonth(months_current + 1);
renderCalendar();
});

renderCalendar();
