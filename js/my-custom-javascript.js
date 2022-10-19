// ID Selectors Exercises
// let subtitle = $("#subtitle").html();
// alert(subtitle);
//
$(".poster").css("height", "200px");
//
// window.onload = function() {
//     alert('windowon.load');
// }
//
// $(function() {
//     alert("The DOM has finished loading")
// });


//Class Selectors
// $(".codeup").css("border", "1px solid red");


//Element Selectors
// $(".list-items").css("font-size", "20px");
// $("h1").css("background-color", "orange");
// $("p").css("background-color", "orange");
// $("li").css("background-color", "orange");
// let title = $("#title").html();
// alert(title);


// Multiple Selectors
// $("h1, p, li").css("background-color", "red");


//Mouse Events
$("h1").click(function() {
    $(this).css("background-color", "red");
});

$("p").dblclick(function() {
    $(this).css("font-size", "18px");
})

$("li").hover(
    function() {
        $(this).css("color", "red");
    },
    function() {
        $(this).css("color", "black");
    }
)