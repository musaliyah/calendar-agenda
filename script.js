var presentTime = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(presentTime);

$(document).ready(function(){

$('.saveBtn').on('click', function (){
    var details = $(this).siblings('description').val 
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, details);

})

function liveTime (){

    var timeNow = moment().hour();

    $('time.block').each(function(){
        var hours = parseInt($(this).attr('id').split('hour')[1]);

            if (hours < timeNow) {
                $(this).addClass('past');
                $(this).removeClass('future');
                $(this).removeClass('present');
            }
            else if (hours === timeNow) {
                $(this).removeClass('past')
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
$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12am .description').val(localStorage.getItem('12am'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));
    
})