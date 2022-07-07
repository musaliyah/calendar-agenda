var presentTime = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(presentTime);

$(document).ready(function(){

$('.saveBtn').on('click', function (){
    var details = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, details);
    console.log(time , details);

})

function liveTime (){

    var now = moment().hour();

    $('.time-block').each(function(){
        var hours = parseInt($(this).attr('id').split('hour')[1]);
            if (hours < now) {
                $(this).addClass('past');
                $(this).removeClass('future');
                $(this).removeClass('present');
            }
            else if (hours === now) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');

            }
            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    
    } liveTime();
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));
    
})