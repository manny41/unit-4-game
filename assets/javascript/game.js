$(document).ready(function(){
    console.log("I have been loaded!!");
    //Declare variables for this game
    var wins       = 0;
    var losses     = 0;
    var totalScore = 0;

    //Have computer generate a random number
    var randomNumber     = Math.floor(Math.random() * 51) + 30;
    $('#random-number-box').text(randomNumber);

    //Generate random numbers for each precious stones
    var rubyStone        = Math.floor(Math.random() * 13);
    var esmeraldStone    = Math.floor(Math.random() * 13);
    var topazStone       = Math.floor(Math.random() * 13);
    var pinkSaphireStone = Math.floor(Math.random() * 13);

    //On click re-initialize value of totalScore
    //As more clicks on any of these stones, add them to a total value
    //If the total value matches the random number, update wins
    //and reset random number as well as totalScore
    //Else if the total value is greater, update losses
    //and reset random number and totalScore
    $('.red').on('click', function(){
        totalScore += rubyStone;
        $('#total-score').text(totalScore);
        if(totalScore === randomNumber){
            wins++;
            $('#wins-losses-box').prepend('<p>You Won!!!</p>');
            $('#wins').text('Wins: ' + wins);
            myResetFunction();
        } else if(totalScore > randomNumber){
            losses++;
            $('#wins-losses-box').prepend('<p>You Lost!!!</p>');
            $('#losses').text('Losses: ' + losses);
            myResetFunction();
        } else{
            console.log('Keep Playing');
        }
    });
    $('.green').on('click', function(){
        totalScore += esmeraldStone;
        $('#total-score').text(totalScore);
        if(totalScore === randomNumber){
            wins++;
            $('#wins-losses-box').prepend('<p>You Won!!!</p>');
            $('#wins').text('Wins: ' + wins);
            myResetFunction();
        } else if(totalScore > randomNumber){
            losses++;
            $('#wins-losses-box').prepend('<p>You Lost!!!</p>');
            $('#losses').text('Losses: ' + losses);
            myResetFunction();
        } else{
            console.log('Keep Playing');
        }
    });
    $('.blue').on('click', function(){
        totalScore += topazStone;
        $('#total-score').text(totalScore);
        if(totalScore === randomNumber){
            wins++;
            $('#wins-losses-box').prepend('<p>You Won!!!</p>');
            $('#wins').text('Wins: ' + wins);
            myResetFunction();
        } else if(totalScore > randomNumber){
            losses++;
            $('#wins-losses-box').prepend('<p>You Lost!!!</p>');
            $('#losses').text('Losses: ' + losses);
            myResetFunction();
        } else{
            console.log('Keep Playing');
        }
    });
    $('.pink').on('click', function(){
        totalScore += pinkSaphireStone;
        $('#total-score').text(totalScore);
        if(totalScore === randomNumber){
            wins++;
            $('#wins-losses-box').prepend('<p>You Won!!!</p>');
            $('#wins').text('Wins: ' + wins);
            myResetFunction();
        } else if(totalScore > randomNumber){
            losses++;
            $('#wins-losses-box').prepend('<p>You Lost!!!</p>');
            $('#losses').text('Losses: ' + losses);
            myResetFunction();
        } else{
            console.log('Keep Playing');
        }
    });

    function myResetFunction(){
        var randomNumber     = Math.floor(Math.random() * 51) + 30;
        $('#random-number-box').text(randomNumber);

        totalScore = 0;
        $('#total-score').text(totalScore);

        var rubyStone        = Math.floor(Math.random() * 13);
        var esmeraldStone    = Math.floor(Math.random() * 13);
        var topazStone       = Math.floor(Math.random() * 13);
        var pinkSaphireStone = Math.floor(Math.random() * 13);

        // $('#wins-losses-box').text('<p>Wins = 0</p><br/');
        // $('#wins-losses-box').text('<p>You Won!!!</p>');
    }

});