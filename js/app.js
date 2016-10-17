$(document).ready(function() {
    var turn = "X";

    $(document).on("click", ".game-space", function() {
        if ($(this).html() === "") {
            $(this).html(turn);
            if (turn === "X") {
                turn = "O";
            } else {
                turn = "X";
            }
        }
    });

});