$(function(){
	window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "pc_index.html" :  "index.html";
	$("#menu_main").height(window.screen.height);
	$(".top").height(window.screen.width*0.093);
	$(".bott_menu").height(window.screen.width*0.093);
	$(".nav").height(window.screen.width/2);
	$(".por_nav").height(window.screen.width*0.48);
	$("#logo").width($(".top").height()*1.928);
	$("#menu").width($(".top").height());
	$("#fuzhuang").height(window.screen.width*0.95/2.3);
	$("#xie").height(window.screen.width*0.333*0.8*2.55);
	$(".double").height(window.screen.width*0.333*0.8*2.55);
	$(".double>div").height(window.screen.width*0.333*0.8*2.55/2);
	$(".foo").height(window.screen.width*0.34);
	$("#shen_word").css("margin-top",window.screen.width*0.34/2-15);
	$(".erweima").height(window.screen.width*0.333*0.58);
	$(".bott_up").height($(".bott_up").height()+30);
	$(".main_img").height(window.screen.width*0.5*0.36);
	$(".sub_main>div").height(window.screen.width*0.095);
	$(".por_img").height(window.screen.width*0.58);
	$(".porbaiyou").height(window.screen.width*0.44);
	$(".abt_main>div").height(window.screen.width*0.5*0.58);
	$(".hezuo_main>div").height(window.screen.width*0.293);
	$(".huodong_main>div").height(window.screen.width*0.639);
	$(".dongtai_main>div").height(window.screen.width*0.3);
	$(".addrs").height(window.screen.width*0.357);
	$(".menu_main_con").find("img").width($(".menu_main_con").find("div").css("font-size"));
	$(".menu_main_con").find("img").height($(".menu_main_con").find("div").css("font-size"));
	$(".menu_main_con>div").eq(0).click(function(){
		if ($(this).find("img").attr("src") == "img/shouye.png") {
			$(this).find("img").attr("src","img/shouye_touch.png");
		} else{
			$(this).find("img").attr("src","img/shouye.png");
		}
		
	});
	$(".menu_main_con>div").eq(1).click(function(){
		if ($(this).find("img").attr("src") == "img/dongtai.png") {
			$(this).find("img").attr("src","img/dongtaitouch.png");
		} else{
			$(this).find("img").attr("src","img/dongtai.png");
		}
		
	});
	$(".menu_main_con>div").eq(2).click(function(){
		if ($(this).find("img").attr("src") == "img/jieshao.png") {
			$(this).find("img").attr("src","img/jieshaotouch.png");
		} else{
			$(this).find("img").attr("src","img/jieshao.png");
		}
		
	});
	$(".menu_main_con>div").eq(3).click(function(){
		if ($(this).find("img").attr("src") == "img/hezuo.png") {
			$(this).find("img").attr("src","img/hezuotouch.png");
		} else{
			$(this).find("img").attr("src","img/hezuo.png");
		}
		
	});
	$(".menu_main_con>div").eq(4).click(function(){
		if ($(this).find("img").attr("src") == "img/guanyu.png") {
			$(this).find("img").attr("src","img/guanyutouch.png");
		} else{
			$(this).find("img").attr("src","img/guanyu.png");
		}
		
	});
	$("#menu").click(function(){
		$("#menu_main").show();
		$("#menu_main").animate({width: "70%"},100);
		setTimeout(function(){
			$(".menu_main_con>div").show();
		},100);
	});
	$("#closs").click(function(){
		$(".menu_main_con>div").hide();
		$("#menu_main").animate({width: "0%"},100);
		setTimeout(function(){
			$("#menu_main").hide();
		},100);
		
	});
	$(".bott_menu").parent().find(".bott").height($(".bott_menu").parent().find(".bott").height()+window.screen.width*0.09);
	$("#us").hover(function(){
		$(this).css("color","#E73235");
		$("#_huoban").css("color","#000000");
		$(this).find("div").show();
		$("#_huoban>div").hide();
		if($(this).find("span").html() == "公司"){
			window.location.href = "about.html";
		}else{
			window.location.href = "dongtai.html";
		}
		
	});
	$("#huoban").hover(function(){
		$(this).css("color","#E73235");
		$("#_us").css("color","#000000");
		$(this).find("div").show();
		$("#_us>div").hide();
		if($(this).find("span").html() == "伙伴"){
			window.location.href = "about_.html";
		}else{
			window.location.href = "dongtai.html";
		}
		
	});
	$(".menu_main_con").find("div").eq(0).click(function(){
		window.location.href = "index.html";
	});
	$(".menu_main_con").find("div").eq(1).click(function(){
		window.location.href = "dongtai.html";
	});
	$(".menu_main_con").find("div").eq(2).click(function(){
		window.location.href = "por.html";
	});
	$(".menu_main_con").find("div").eq(3).click(function(){
		//window.location.href = "index.html";
	});
	$(".menu_main_con").find("div").eq(4).click(function(){
		window.location.href = "about.html";
	});
	$("#btn").click(function(){
		window.location.href = "shenqing.html";
	});
})
