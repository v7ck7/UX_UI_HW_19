console.log("javascript is loaded correctly")

$("button").mouseover(function () {
	$(this).addClass("push");
});
$("button").mouseout(function () {
	$(this).removeClass("push");
});
$("button").click(function () {
	$(this).removeClass("push");
	$("#test1").text("Thanks!");
});

