// Babylon Day Planner jQuery script

$(document).ready(function() {

    // Function: Date and time in Header
    $('#currentDay').append();

    function currentDate() { 
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm a'));
    } setInterval(currentDate, 1000);

    // Planner rows data attributes / one row per hour in a day:
    $('#9AM-row').attr('data-time', moment('9:00 am', 'h:mm a').format('HH'));
    $('#10AM-row').attr('data-time', moment('10:00 am', 'h:mm a').format('HH'));
    $('#11AM-row').attr('data-time', moment('11:00 am', 'h:mm a').format('HH'));
    $('#12PM-row').attr('data-time', moment('12:00 pm', 'h:mm a').format('HH'));
    $('#1PM-row').attr('data-time', moment('1:00 pm', 'h:mm a').format('HH'));
    $('#2AM-row').attr('data-time', moment('2:00 pm', 'h:mm a').format('HH'));
    $('#3AM-row').attr('data-time', moment('3:00 pm', 'h:mm a').format('HH'));
    $('#4AM-row').attr('data-time', moment('4:00 pm', 'h:mm a').format('HH'));
    $('#5AM-row').attr('data-time', moment('5:00 pm', 'h:mm a').format('HH'));

    // For loop with conditionals if for color change per the hour:
    var currentHour = moment().format('HH');
    var currentHourInteger = parseInt(currentHour);
    var inputHour = $('#' + i + 'row').attr('data-time');
    var inputHourInteger = parseInt(inputHour);

    for (var i = 0; i <= 12; i++) {
        if (currentHourInteger === inputHourInteger) {
            $('#' + i + 'row').addClass('past');
        }
        if (currentHourInteger === inputHourInteger) {
            $('#' + i + 'row').addClass('present');
        }
        if (currentHourInteger === inputHourInteger) {
            $('#' + i + 'row').addClass('future');
        }
    }
    // Function: Save data button to localStorage on click:
    var saveButton = $('.saveBtn');

    saveButton.on('click', function () {
        var oneHour = $(this).attr('this-hour');
        var userInput = $('#' + oneHour + 'row').val();
        localStorage.setItem(oneHour, userInput);
    });

    function savePlans() {
        for (var i = 0; i <= 12; i++) {
            $('#' + i + 'row').val(localStorage.getItem(i));
        }
    }

    savePlans();
}); 