
$(function(){
		$(".on popupwindow2_1").click(function(){
				$(".popup2_1").fadeIn();
				$(".popup2_2").fadeOut();
				$(".popup2_3").fadeOut();
		});	
		$("#button2").click(function(){
				$(".pic1").fadeOut();
				$(".pic2").fadeIn();
				$(".pic3").fadeOut();
		});
		$("#button3").click(function(){
				$(".pic1").fadeOut();
				$(".pic2").fadeOut();
				$(".pic3").fadeIn();
		});
});			
