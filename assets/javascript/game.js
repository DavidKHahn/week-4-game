
var previous = 0;
var randomChoice;
var loss = 0;
var win = 0;

var startGame = function () {

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

        crystal.html(random);

        $(".crystals").append(crystal);

    }
}

startGame();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));
    previous += num;

    if (previous > randomChoice) {

        alert("You lose!");
        loss--;
        $("#loss").html(loss);
        previous = 0;
    }

    else if (previous === randomChoice) {
        alert("You win!");
        $("#win").html(win);
        win++;
        startGame();
    }
});
