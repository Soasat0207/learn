const date = new Date();
var year_current = date.getFullYear();
var months_current = date.getMonth();
const renderCalendar = function() {
date.setDate(1);
console.log(date.setDate(1))
//lấy ra days
const monthDays = document.querySelectorAll(".days");
  console.log(160,monthDays[1]);
// ngày cuối  cùng trong tháng hiện tại
const lastDay = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();
console.log(166,lastDay);
 //ngày cuối cùng trong tháng trước
const prevLastDay = new Date(
  date.getFullYear(),
  date.getMonth(),
  0
).getDate();
  console.log(174,prevLastDay);
  // vị trí mà ngày đầu tiên trong tháng hiển thị nghĩa là thứ ngày đầu tiên trong tháng hiển thị 
const firstDayIndex = date.getDay();
  console.log(176,firstDayIndex)
//vị trí hiển thị của ngày cuối cùng trong tháng hiện tại nghĩa là hiển thị ra thứ của ngày cuối cùng trong tháng hiện tại
const lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();
console.log(184,lastDayIndex)
 // vị trí hiển thị của ngày đầu tiên trong tháng tiếp theo 
const nextDays = 7 - lastDayIndex - 1;
console.log(nextDays);
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
const monthArr = document.querySelectorAll(".date h1");
for (let i = 0; i < monthArr.length; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(j);
        monthArr[i].innerHTML = months[0];
    }
    
}

const yearArr = document.querySelectorAll(".date p");
for (let i = 0; i < yearArr.length; i++) {

    yearArr[i].innerHTML = date.getFullYear();
}
document.querySelectorAll(".date p").innerHTML = date.getFullYear();

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  for (let i = 0; i < monthDays.length; i++) {
    monthDays[i].innerHTML=days;
  }
//   monthDays.innerHTML = days;
}

for (let i = 1; i <= lastDay; i++) {
  if (
    i === new Date().getDate() &&
    date.getMonth() === new Date().getMonth()
  ) {
    days += `<div class="today">${i}</div>`;
    for (let j = 0; j < monthDays.length; j++) {
        monthDays[j].innerHTML=days;
      }
    // monthDays.innerHTML = days;
  } else {
    days += `<div>${i}</div>`;
    for (let j = 0; j < monthDays.length; j++) {
        monthDays[j].innerHTML=days;
      }
    // monthDays.innerHTML = days;
  }
}

for (let i = 1; i <= nextDays; i++) {
  days += `<div class="next-date">${i}</div>`;
  for (let j = 0; j < monthDays.length; j++) {
    monthDays[j].innerHTML=days;
  }
//   monthDays.innerHTML = days;
}
};

document.querySelector(".prev").addEventListener("click", function() {

date.setMonth(date.getMonth() - 1);
renderCalendar();
});

document.querySelector(".next").addEventListener("click", function() {
date.setMonth(date.getMonth() + 1);
renderCalendar();
});

renderCalendar();
