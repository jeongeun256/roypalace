$(function(){
	$('.icon2 li a').click(function(){
		//탭메뉴의a를 클릭하면
		$(this).parent().addClass('on').siblings().removeClass('on');
		//a의 부모(.parent())에 on을 추가하고 형제(.siblings())는 on을 지워라.
	});		
	$(".room_popup").hide();	
	$(".popup2_1").fadeIn();
		$(".popupwindow2_1").click(function(){
				$(".popup2_1").fadeIn();
				$(".popup2_2").fadeOut();
				$(".popup2_3").fadeOut();
				$(".popup2_4").fadeOut();
				$(".popup2_5").fadeOut();
				$(".popup2_6").fadeOut();
		});	
		$(".popupwindow2_2").click(function(){
				$(".popup2_1").fadeOut();
				$(".popup2_2").fadeIn();
					$(".popup2_3").fadeOut();
				$(".popup2_4").fadeOut();
				$(".popup2_5").fadeOut();
				$(".popup2_6").fadeOut();
		});
		$(".popupwindow2_3").click(function(){
				$(".popup2_1").fadeOut();
				$(".popup2_2").fadeOut();
				$(".popup2_3").fadeIn();
				$(".popup2_4").fadeOut();
				$(".popup2_5").fadeOut();
				$(".popup2_6").fadeOut();
		});
		$(".popupwindow2_4").click(function(){
				$(".popup2_1").fadeOut();
				$(".popup2_2").fadeOut();
				$(".popup2_3").fadeOut();
				$(".popup2_4").fadeIn();
				$(".popup2_5").fadeOut();
				$(".popup2_6").fadeOut();
		});
		$(".popupwindow2_5").click(function(){
				$(".popup2_1").fadeOut();
				$(".popup2_2").fadeOut();
				$(".popup2_3").fadeOut();
				$(".popup2_4").fadeOut();
				$(".popup2_5").fadeIn();
				$(".popup2_6").fadeOut();
		});
		$(".popupwindow2_6").click(function(){
				$(".popup2_1").fadeOut();
				$(".popup2_2").fadeOut();
				$(".popup2_3").fadeOut();
				$(".popup2_4").fadeOut();
				$(".popup2_5").fadeOut();
				$(".popup2_6").fadeIn();
		});
	$('.dining01 li a').click(function(){
		//탭메뉴의a를 클릭하면
	$(this).parent().addClass('dining_tap').siblings().removeClass('dining_tap');
		//a의 부모(.parent())에 on을 추가하고 형제(.siblings())는 on을 지워라.
		});
	$(".offers_popup").hide();	
		$(".popup4_1").fadeIn();
			$(".popupwindow4_1").click(function(){
					$(".popup4_1").fadeIn();
					$(".popup4_2").fadeOut();
					$(".popup4_3").fadeOut();
					$(".popup4_4").fadeOut();
		});	
		$(".popup4_2").fadeIn();
			$(".popupwindow4_2").click(function(){
					$(".popup4_1").fadeOut();
					$(".popup4_2").fadeIn();
					$(".popup4_3").fadeOut();
					$(".popup4_4").fadeOut();
		});	
		$(".popup4_3").fadeIn();
			$(".popupwindow4_3").click(function(){
					$(".popup4_1").fadeOut();
					$(".popup4_2").fadeOut();
					$(".popup4_3").fadeIn();
					$(".popup4_4").fadeOut();
		});	
		$(".popup4_4").fadeIn();
			$(".popupwindow4_4").click(function(){
					$(".popup4_1").fadeOut();
					$(".popup4_2").fadeOut();
					$(".popup4_3").fadeOut();
					$(".popup4_4").fadeIn();
		});	
		
});