$(function () {
// variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
// end variables

//hide and display divs
$("#startButton").click(function() {
    $("#startPage").hide();
    $("#triviaPage").show();
});

$("#doneButton").click(function() {
    clearInterval(interval);
    $("#triviaPage").hide();
    $("#resultsPage").show();
});
//end hide and display divs

//timer functions
var counter = 0;

var interval = setInterval(function() {
    counter++;
    
    if (counter == 60) {
        // Display a login box
        clearInterval(interval);
        $('#timeUpModal').modal('show');
        $("#modalButton").click(function() {
            $("#doneButton").click();
        });
    }
}, 1000);
// end timer functions

//function that checks the answers
function checkAnswer() {
    $("input:checked").each(function(){
        var checkedValue = $(this).val()
        if (checkedValue == "true") {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    })

    unanswered = 5 - (correctAnswers + incorrectAnswers)
    //display results onto html results page
    $("#correctAnswers").html(correctAnswers);
    $("#incorrectAnswers").html(incorrectAnswers);
    $("#unanswered").html(unanswered);
}

$(document).on("click", "#doneButton", function(){
    checkAnswer();
})
// end checkAnswer function

});