$("h1").css("color","red");

$("h1").click(function() {
    $("h1").css("color","blue");
})

$("button").html("<em>Hey</em>");

$("input").keydown(function(event) {
    $("h1").html(event.key)
})