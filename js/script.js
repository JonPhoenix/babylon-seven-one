// Babylon Day Planner jQuery script
$(document).ready(function () {

    // Function: Date and time in Header
    $('#currentDay').append();

    function currentDate() { 
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    } setInterval(currentDate, 1000);

    // Planner rows data attributes / one row per hour in a day:
    $('#9Row').attr('data-time', moment('9:00 am', 'h:mm a').format('HH'));
    $('#10Row').attr('data-time', moment('10:00 am', 'h:mm a').format('HH'));
    $('#11Row').attr('data-time', moment('11:00 am', 'h:mm a').format('HH'));
    $('#12Row').attr('data-time', moment('12:00 pm', 'h:mm a').format('HH'));
    $('#1Row').attr('data-time', moment('1:00 pm', 'h:mm a').format('HH'));
    $('#2Row').attr('data-time', moment('2:00 pm', 'h:mm a').format('HH'));
    $('#3Row').attr('data-time', moment('3:00 pm', 'h:mm a').format('HH'));
    $('#4Row').attr('data-time', moment('4:00 pm', 'h:mm a').format('HH'));
    $('#5Row').attr('data-time', moment('5:00 pm', 'h:mm a').format('HH'));

    // 'For' loop with conditionals 'if' to change hours colors:
    for (var i = 0; i <= 12; i++) {
        var currentHour = moment().format('HH');
        var currentHourInteger = parseInt(currentHour);
        var inputHour = $('#' + i + 'Row').attr('data-time');
        var inputHourInteger = parseInt(inputHour);

        if (currentHourInteger > inputHourInteger) {
            $('#' + i + 'Row').addClass('past');
        }
        if (currentHourInteger === inputHourInteger) {
            $('#' + i + 'Row').addClass('present');
        }
        if (currentHourInteger < inputHourInteger) {
            $('#' + i + 'Row').addClass('future');
        }
    }
    // Function: Save data button to localStorage on click:
    var saveBtn = $('.saveBtn');

    saveBtn.on('click', function () {

        var oneHour = $(this).attr('data-hour');
        var userInput = $("#" + oneHour + 'Row').val();
        localStorage.setItem(oneHour, userInput);
    });
    // Function: Keeping data in localStorage after refreshing:
    function savePlanner() {
        for (var i = 0; i <= 12; i++) {
            $('#' + i + 'Row').val(localStorage.getItem(i));
        }
    }
    savePlanner();
}); 