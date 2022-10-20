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

//Bonus
$(".frame").css({
    "border": "10px black",
    "border-style": "outset",
    "display": "inline-block",
    "height": "210px",
    "width": "310px"
});

$("img").css({
    "height": "200px",
    "width": "300px"
});

$("button").css("margin-left", "200px");

$("#left-btn").click(function() {
    let img1 = $("#left-img").attr('src');
    let img2 = $("#center-img").attr('src');
    $("#left-img").attr("src", img2);
    $("#center-img").attr("src", img1);
})

$("#right-btn").click(function() {
    let img2 = $("#center-img").attr('src');
    let img3 = $("#right-img").attr('src');
    $("#right-img").attr("src", img2);
    $("#center-img").attr("src", img3);
})

$("#center-btn").click(function() {
    let oneOrZero = Math.round(Math.random())
    if (oneOrZero === 0) {
        let img1 = $("#left-img").attr('src');
        let img2 = $("#center-img").attr('src');
        $("#left-img").attr("src", img2);
        $("#center-img").attr("src", img1);
    } else {
        let img2 = $("#center-img").attr('src');
        let img3 = $("#right-img").attr('src');
        $("#right-img").attr("src", img2);
        $("#center-img").attr("src", img3);
    }
})