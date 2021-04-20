const date = new Date();
var year_current = date.getFullYear();
var months_current = date.getMonth();
const renderCalendar = function() {
date.setDate(1);
// console.log(date.setDate(1))
//lấy ra days
const monthDays = document.querySelectorAll(".days");
  // console.log(160,monthDays[1]);
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
let monthStoreArr =[]
for (let i = 0; i < monthArr.length; i++) {
  
        // console.log(55,monthArr[i])
        monthArr[i].innerHTML = months[i];
        monthStoreArr.push(i)
    
}
// console.log(monthStoreArr)
const yearArr = document.querySelectorAll(".date p");
for (let i = 0; i < yearArr.length; i++) {

    yearArr[i].innerHTML = date.getFullYear();
}
document.querySelectorAll(".date p").innerHTML = date.getFullYear();
const block = document.querySelectorAll('.calendar');
console.log(76,block);
for (let g = 0; g < block.length; g++) {
  console.log(43,g);
  // ngày cuối  cùng trong tháng hiện tại
const lastDay = new Date(
  date.getFullYear(),
  g + 1 ,
  0
).getDate();
  console.log(50,lastDay);
  //ngày cuối cùng trong tháng trước
const prevLastDay = new Date(
  date.getFullYear() ,
  g,
  0
).getDate();
  
  console.log(57,prevLastDay);
  // vị trí mà ngày đầu tiên trong tháng hiển thị nghĩa là thứ ngày đầu tiên trong tháng hiển thị 
const firstDayIndex = new Date(
  date.getFullYear(),
  g 
).getDay();
  console.log(63,firstDayIndex)
  //vị trí hiển thị của ngày cuối cùng trong tháng hiện tại nghĩa là hiển thị ra thứ của ngày cuối cùng trong tháng hiện tại
const lastDayIndex = new Date(
  date.getFullYear(),
  g + 1,
  0
).getDay();
console.log(70,lastDayIndex)
 // vị trí hiển thị của ngày đầu tiên trong tháng tiếp theo 
 const nextDays = 7 - lastDayIndex - 1;
 console.log(nextDays);
     
 

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    monthDays[g].innerHTML=days;

//   monthDays.innerHTML = days;
}

for (let i = 1; i <= lastDay; i++) {
  if (
    i === new Date().getDate() &&
    date.getMonth() === new Date().getMonth()
  ) {
    days += `<div class="today">${i}</div>`;
    monthDays[g].innerHTML=days;
    // monthDays.innerHTML = days;
  } else {
    days += `<div>${i}</div>`;
    monthDays[g].innerHTML=days;
    // monthDays.innerHTML = days;
  }
}

for (let i = 1; i <= nextDays; i++) {
  days += `<div class="next-date">${i}</div>`;
  monthDays[g].innerHTML=days;
//   monthDays.innerHTML = days;
}

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
