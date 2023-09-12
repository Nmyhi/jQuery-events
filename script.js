$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").fadeToToggle(1000, 0.5);

	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click" , function() {
		$("p").toggleClass("red");
		 });
	$("h2").mouseenter( function () {
		$(this).css("font-size", "2em");
	});
	$("h2").mouseleave( function () {
		$(this).css("font-size", "1em");
	});
	$("a:contains('Button')").mouseenter(function () {
		$("body").css("background-color", "pink");
	});
	$("a:contains('Button')").mouseleave(function () {
		$("body").css("background-color", "grey");
	});


}); 
