$("dd").addClass("invisible");

$(".invisible").css("visibility", "hidden");

$("document").ready(function() {
    $("#toggle").click(function(event) {
        event.preventDefault();
        $(".invisible".toggleClass("visibility"));
    });
});