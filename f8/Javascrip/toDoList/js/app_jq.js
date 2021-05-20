$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});
$(document).ready(function () {
    $(".btn_add_plans").click(function () {
        if ($(".add_plan-input").val() == "") {
            alert('tiêu đề trống')
        } else {
            $(".sortable").append(`
            <div class="habit_tracker-plans" >
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
// for (let i = 0; i < $(".habit_tracker-items-target").length; i++) {
//     $(".habit_tracker-items-target").eq(i).dblclick(function() {
//         let elementRemove = $(this);
//         console.log(elementRemove);
//         $('.btn-modal-del-plan').click(function() {
//             console.log(elementRemove);
//             elementRemove.parent().empty();
//         })
//       });
// }
// if($('.habit_tracker-items input[type=checkbox]')[0].checked = false){
//     console.log('true');
// }
// else{
//     console.log('false');
// }
