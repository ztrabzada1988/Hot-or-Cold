// Define Global Variables

// set a var to generate a new number between 1 and 100 that the user have to guess.
var randomNumber = Math.floor((Math.random() * 100) + 1);

// set a global varialbe counter initially with a value of 0
var counter = 0;


// step 1: Define Functions


// function to start a new game (the new game needs to start without refreshing the game
function newGame() {
    //reload the page when you start a new game
    document.location.reload(true);
}

// function to validate the user's input (no spaces, a number between 1 - 100 and etc). set traps.
function validateInput(inputNumber) {
    // set the user input number flag to true initially and then set traps.
    var userInputNumberFlag = true;

    /* // trap 1.  make sure there are no spaces entered
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = alert("Please enter a number without any spaces");
        userInputNumberFlag = false;
        $('#userGuess').val('');

    } */

    /* // trap 2.  make sure the input is a number not letters
     while (inputNumber !== parseInt(inputNumber, 10)) {
         alert("Please enter an integer without any decimal places");
         inputNumberFlag = false;
         $('#userGuess').val('');
     } */

    // trap 5.  make sure a value is entered (not just white blank)
    if (inputNumber.length < 1) {
        var inputNumber = alert("Please enter at least one number");
        userInputNumberFlag = false;
        $('#userGuess').val('');
    }

    // trap 3.  make sure the input is an integer and has no decimal places
    else if (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = alert("Please enter an integer without any decimal places");
        userInputNumberFlag = false;
        $('#userGuess').val('');
    }

    // trap 4.  make sure the input is a number between 1 and 100
    else if ((inputNumber < 1) || (inputNumber > 100)) {
        var inputNumber = alert("Please enter a number between 1 and 100");
        userInputNumberFlag = false;
        $('#userGuess').val('');
    }



    // if after all these traps the value of inputNumberFlag is true, play the Hot-or-Cold game.
    if (userInputNumberFlag == true) {
        userFeedback(randomNumber, inputNumber);
        counter++;
        trackGuesses(counter);
        guessedHistory(inputNumber);
        $('#userGuess').val('');
    }

}

/* function to give user feeback about each guess - whether too low, high, or just right. Feedback about the guess
       should appear in div#feedback. by default it is "Make Your Guess" */
function userFeedback(randomNumber, inputNumber) {
    // initially we start we setting a var difference to be the difference between random and input Numbers
    var difference = Math.abs(randomNumber - inputNumber);

    // define ranges and replace text for #feeback
    if (difference >= 50) {
        $('#feedback').text('Very Cold');
        document.body.style.backgroundColor = '#002cb3';

    } else if (difference >= 30 && difference <= 49) {
        $('#feedback').text('Cold');
        document.body.style.backgroundColor = 'lightblue';

    } else if (difference >= 20 && difference <= 29) {
        $('#feedback').text('Warm');
        document.body.style.backgroundColor = 'pink';

    } else if (difference >= 10 && difference <= 19) {
        $('#feedback').text('Hot');
        document.body.style.backgroundColor = 'maroon';

    } else if (difference >= 5 && difference <= 9) {
        $('#feedback').text('Very Hot');
        document.body.style.backgroundColor = 'red';

    } else if (difference >= 1 && difference <= 4) {
        $('#feedback').text('Very Very Hot');
        document.body.style.backgroundColor = 'red';

    } else {
        $('#feedback').text('You Won!!');
        document.body.style.backgroundColor = '#002cb3';

    }
}

// function to track how many guesses the user has made. it should apear in span#count which defaults to 0
function trackGuesses(counter) {
    // Function to count the number of guesses
    $('#count').text(counter);
}


// function to supply users with a list of numbers they have guessed so far. just add <li> to ul#guesslist
function guessedHistory(guessedNumber) {
    $('#guessList').append('<li>' + guessedNumber + '</li>');
}




// Step 2:  Use functions

$(document).ready(function () {

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    $('.new').on('click', newGame);

    $('#guessButton').on('click', function () {

        //first get the value that user added in the input box
        var guessedNumber = $('#userGuess').val();

        //validate all the numbers
        validateInput(guessedNumber);

    });

});

$(document).on('keydown', function (key) {
    if (key.keyCode == 13) {
        var gussedNumber = $('#userGuess').val();

        validateInput(gussedNumber);
    }
})
