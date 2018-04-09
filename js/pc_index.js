$(function(){
	$(".pc_nav").height(window.screen.width*0.36);
	$(".nav_oth").height(window.screen.width*0.20);
	$(".nav_oth_o").height(window.screen.width*0.25);
	$("#fuzhuang").height(window.screen.width*0.7*0.95/2.3);
	$("#xie").height(window.screen.width*0.7*0.333*0.8*2.55);
	$(".double").height(window.screen.width*0.7*0.333*0.8*2.55);
	$(".double>div").height(window.screen.width*0.7*0.333*0.8*2.55/2);
	
	$(".foo").height(window.screen.width*0.27);
	$("#shen_word").css("margin-top",window.screen.width*0.25/2-15);
	$(".erweima").height(window.screen.width*0.333*0.58);
	$(".bott_up").height($(".bott_up").height()+30);
	$(".fuwu").hide();
	$(".fw").hover(function(){
		$(".pc_por_bt").removeClass("pc_por_bt");
		$(this).addClass("pc_por_bt");
		if($(this).html() == "我们的服务"){
			$(".fuwu").show();
			$(".chanpin").hide();
		}else if($(this).html() == "我们的产品"){
			$(".fuwu").hide();
			$(".chanpin").show();
		}
	});
	$(".pc_menu").find("div").click(function(){
		//alert($(this).html())
		if($(this).html() == "首页"){
			window.location.href = "pc_index.html";
		}else if($(this).html() == "产品介绍"){
			window.location.href = "pc_por.html";
		}else if($(this).html() == "客户案例"){
			//window.location.href = "";
		}else if($(this).html() == "关于我们"){
			window.location.href = "pc_about.html";
		}else if($(this).html() == "公司动态"){
			window.location.href = "pc_dongtai.html";
		}
	});
})
