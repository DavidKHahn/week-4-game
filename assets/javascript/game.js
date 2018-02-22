
var previous = 0;
var randomChoice;
var loss = 0;
var win = 0;

var startGame = function () {

    var images = [
        "https://pbs.twimg.com/profile_images/926010203723534337/31F_Bkyq_400x400.jpg",
        "https://www.adiamor.com/images/diamondpics/diamonds_big/Round-diamond.jpg", 
        "https://pbs.twimg.com/profile_images/866480842104651776/OnV1sEVe_400x400.jpg",
        "https://forbino.com/en/wp-content/uploads/2010/02/eos_1-1.png"];

    $(".crystals").empty();
    randomChoice = Math.floor(Math.random() * 101) + 19;
    $("#result").html('randomChoice');

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size":"cover"
        })

        crystal.html(random);

        $(".crystals").append(crystal);

    }
    $("#previous").html("Score: " + previous);
}

startGame();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Score: " + previous);

    if (previous > randomChoice) {

        alert("You lose!");
        loss++;
        $("#loss").html("Loss: " + loss);
        previous = 0;
    
    }

    else if (previous === randomChoice) {
        alert("You win!");
        $("#win").html("Win: " + win);
        win++;


        startGame();
    }
});
