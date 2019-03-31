// Cheat Codes
neededkeys = [38,38,40,40,37,39,37,39,66,65], started = false, count = 0;
$(document).keydown(function(e) {
    key = e.keyCode;
    if (!started) {
        if (key == 38) {
            started = true;
        }
    }
    if (started) {
        if (neededkeys[count] == key) {
            count++;
        } else {
            reset();
        }
        if (count == 10) {
            reset();
            // Do your stuff here
            var audio = new Audio('audio/HACKERMAN.mp3');
            audio.play();
            alert('HACKER!');
            $('body').css('background-image', 'files/leet-haxor.jpg');
        }
    } else {
        reset();
    }
});
function reset() {
    started = false;
    count = 0;
}
