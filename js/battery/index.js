$("#auto-charge-button").click(function () {
    $(".full").css("background-color", "white");
    $(".high").css("background-color", "white");
    $(".half").css("background-color", "white");
    $(".low").css("background-color", "white");
    setTimeout(function () {
        $(".full").css("background-color", "red");
        $(".high").css("background-color", "white");
        $(".half").css("background-color", "white");
        $(".low").css("background-color", "white");
    }, 3000);

    setTimeout(function () {
        $(".full").css("background-color", "orange");
        $(".high").css("background-color", "orange");
    }, 6000);

    setTimeout(function () {
        $(".full").css("background-color", "yellow");
        $(".high").css("background-color", "yellow");
        $(".half").css("background-color", "yellow");

    }, 9000);

    setTimeout(function () {
        $(".full").css("background-color", "green");
        $(".high").css("background-color", "green");
        $(".half").css("background-color", "green");
        $(".low").css("background-color", "green");
    }, 12000);

});



function myFunction(val) {
    if (val == 4) {
        $(".full").css("background-color", "green");
        $(".high").css("background-color", "green");
        $(".half").css("background-color", "green");
        $(".low").css("background-color", "green");
    } else if (val == 3) {
        $(".full").css("background-color", "yellow");
        $(".high").css("background-color", "yellow");
        $(".half").css("background-color", "yellow");
        $(".low").css("background-color", "white");

    } else if (val == 2) {
        $(".full").css("background-color", "orange");
        $(".high").css("background-color", "orange");
         $(".half").css("background-color", "white");
        $(".low").css("background-color", "white");
    } else if (val == 1) {
        $(".full").css("background-color", "red");
        $(".high").css("background-color", "white");
        $(".half").css("background-color", "white");
        $(".low").css("background-color", "white");
    } else {
        $(".full").css("background-color", "white");
        $(".high").css("background-color", "white");
        $(".half").css("background-color", "white");
        $(".low").css("background-color", "white");
    }
}
