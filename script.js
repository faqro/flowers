document.addEventListener("click", function () {
    document.getElementById("audioelement").muted = false;
    document.getElementById("audioelement").volume = 1;
    if(document.getElementById("audioelement").paused) {
        document.getElementById("audioelement").play();
    }
})