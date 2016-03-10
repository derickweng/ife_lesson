$(function(){
//定时轮播
	var time = setInterval(auto,5000);
	function auto(){
		if($(".box-bd ul li").eq(0).css("left") == "0px"){
			$(".box-bd ul li").eq(0).animate({left:"-100%"},1000);
			$(".box-bd ul li").eq(1).animate({left:"0px"},1000);
			$(".box-hd div a").each(function(){$(this).toggleClass("on")});
			}
		else{
			$(".box-bd ul li").eq(1).animate({left:"100%"},1000);
			$(".box-bd ul li").eq(0).animate({left:"0px"},1000);
			$(".box-hd div a").each(function(){$(this).toggleClass("on")});
			}
		}
	$(".star-goods").hover(function(){
		clearInterval(time);
		},function(){
			time = setInterval(auto,5000);
		})
//点击滑动中调用的左右滑动函数
	function left(){
			$(".box-bd ul li").eq(before).animate({left:"-100%"},1000);
			$(".box-bd li").eq(now).animate({left:"0px"},1000);
			$(".box-hd div a").each(function(){$(this).toggleClass("on")});
		}
	function right(){
			$(".box-bd ul li").eq(before).animate({left:"100%"},1000);
			$(".box-bd ul li").eq(now).animate({left:"0px"},1000);
			$(".box-hd div a").each(function(){$(this).toggleClass("on")});
		}
//点击滑动
	var now = 0;//当前点
	var before = 0;//之前点
	$(".more a").click(slide);
	function slide(){
		before = now;
		now = $(this).index();//获取当前点下标
		if (now>before)
		{
			left();
		}
		else if (now<before)
		{
			right();
		}
			before = now;
		}
	
	})