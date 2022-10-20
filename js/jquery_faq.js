$("dd").addClass("invisible");

// $(".invisible").css("visibility", "hidden");

$("#toggle").click(function(e) {
    $("dd").toggleClass("invisible");
})