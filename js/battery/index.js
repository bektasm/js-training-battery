$(document).ready(function(){
    $("#ranger").val(4);

    $("#ranger").on('change', function(elm){
        myFunction($(this).val());
    })

    $("#auto-charge-button").click(function (e) {
        // prevent navigation keys trigger
        // e.preventDefault();
        $("#ranger").val(0);
        paint([".full", ".high", ".half", ".low"], "transparent");
        setTimeout(function () {
            paint([".full"], "red");
            paint([".high", ".half", ".low"], "transparent");
            $("#ranger").val(1);

        }, 3000);

        setTimeout(function () {
            paint([".full", ".high"], "orange");
            $("#ranger").val(2);

        }, 6000);

        setTimeout(function () {
            paint([".full", ".high", ".half"], "yellow");
            $("#ranger").val(3);


        }, 9000);

        setTimeout(function () {
            paint([".full", ".high", ".half", ".low"], "green");
            $("#ranger").val(4);

        }, 12000);

    });

    function paint(sections, color) {
        // console.log('hallo',sections, color);
        sections.forEach(function (section) {
            $(section).css("background-color", color);
        })
    }

    function myFunction(val) {
        // console.log('hallo', val);
        switch(+val){
            case 0:
                paint([".full", ".high", ".half", ".low"], "transparent");
                break;
            case 1:
                paint([".full"], "red");
                paint([".high", ".half", ".low"], "transparent");
                break;
            case 2:
                paint([".full", ".high"], "orange");
                paint([".low", ".half"], "transparent");
                break;
            case 3:
                paint([".full", ".high", ".half"], "yellow");
                paint([".low"], "transparent");
                break;
            case 4:
                paint([".full", ".high", ".half", ".low"], "green");
                break;
        }
    }
})


/* OO Way **/


function Battary(){
    this.segment = 4;
}















