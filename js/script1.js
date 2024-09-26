$(function(){
	$(".on popupwindow2_1").click(function(){
		$(".popup2_1").fadeIn();
		$(".popup2_2").fadeOut();
		$(".popup2_3").fadeOut();
		$(".popup2_4").fadeOut();
		$(".popup2_5").fadeOut();
		$(".popup2_6").fadeOut();
	});	
	$(".on popupwindow2_2").click(function(){
		$(".popup2_1").fadeOut();
		$(".popup2_2").fadeIn();
		$(".popup2_3").fadeOut();
		$(".popup2_4").fadeOut();
		$(".popup2_5").fadeOut();
		$(".popup2_6").fadeOut();
	});
	$(".on popupwindow2_3").click(function(){
		$(".popup2_1").fadeOut();
		$(".popup2_2").fadeOut();
		$(".popup2_3").fadeIn();
		$(".popup2_4").fadeOut();
		$(".popup2_5").fadeOut();
		$(".popup2_6").fadeOut();
	});
});