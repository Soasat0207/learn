$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});
$(document).ready(function () {
    $(".btn_add_plans").click(function () {
        if ($(".add_plan-input").val() == "") {
            alert('tiêu đề trống')
        } else {
            $(".sortable").append(`<div class="habit_tracker-plans" >
            <div class="habit_tracker-items habit_tracker-items-target " >${$(".add_plan-input").val()}</div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            <div class="habit_tracker-items"><input type="checkbox"> </div>
            </div>`);
            
        }
        $(".add_plan-input").val("");

    });
});
console.log($(".habit_tracker-plans"));
for (let i = 0; i < $(".habit_tracker-plans").length; i++) {
    $(".habit_tracker-plans").eq(i).dblclick(function() {
        let elementRemove = this;
        console.log(elementRemove);
        $('.btn-modal-del-plan').click(function() {
            elementRemove.empty();
            console.log('ok')
        })
      });
}

$(".removePlans").click(function() {
    $(".habit_tracker-plans").empty();
  });