// Passing a named function instead of an anonymous function.

function readyFn(jQuery) {
    // Code to run when the document is ready.
}

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    $("#home").click(function () {
        $("#home").show();
        $("#research").hide();
    });

    $("#research").click(function () {
        $("#research").show();
        $("#home").hide();
    });
});

// or:
//$(window).on("load", readyFn);