$("dd").addClass("invisible");

// $(".invisible").css("visibility", "hidden");

$("#toggle").click(function(e) {
    $("dd").toggleClass("invisible");
})

$("dt").click(function() {
    $(this).css("background-color", "yellow");
});

$("#highlight").click(function() {
    $("li").css("background-color", "yellow");
})

$("h3").click(function() {
    $(this).nextAll("li").css("font-weight", "bold");
})

$("li").click(function() {
    $(this).parent().children().first().next().css("color", "blue");
})