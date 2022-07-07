var presentTime = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(presentTime);
//Creates a "presentTime" variable that stores the day-of-the-week, the mounth, the day of the month and year. 
//Pulls from currentDay id in html and stores presentTime variable information into the jumbotron header.

$(document).ready(function(){

$('.saveBtn').on('click', function (){
    var details = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, details);
    console.log(time , details);

}) 
// References the saveBtn class, so that when the save button is clicked, then the function follows. 
// Creates details and time variable to pull from the description class, and the ids to store information in variables in local storage and logs information into console. 

function liveTime (){

    var now = moment().hour();
    // creates a variable that utilizes moment.js to reference hours.

    $('.time-block').each(function(){
        var hours = parseInt($(this).attr('id').split('hour')[1]);
            if (hours < now) {
                $(this).addClass('past');
                $(this).removeClass('future');
                $(this).removeClass('present');
            } 
            // references time-block class and creates a function. It then fetches the id attribute and grabs the id value and stores it in the hours variable. Compares the present time (stored in now variable) with the list of hours. If the listed hours are less than the present time, the past class is added (making the boxes gray to represent the past)

            // recieved tutoring from askbcs to create the hours variable (Ben and Bianca)
            else if (hours === now) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');

            }
            // similar to above, if the listed hour is the same as the present hour then the present class is added and the past, and fture classes are removed. This makes the present time-block red, referencing the css. 
            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
            // if the time-block is not the present or past time, then the future class is added to turn the remaining time-blocks green. 
    
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
// keeps hour descriptions from local storage on the page (so it does not delete after its refreshed)
    
})