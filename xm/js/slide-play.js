$(function(){
	var i=0;
	var time=0;
	function prev(){
		i--;
		if(i<0)
		i=4;
		$(".slide-img a").eq(i).fadeIn(200).siblings().fadeOut(300);
		$(".slide-control a").eq(i).addClass("on-show").siblings().removeClass("on-show");
		}
	function next(){
		i++;
		if(i>4)
		i=0;
		$(".slide-img a").eq(i).fadeIn(200).siblings().fadeOut(300);
		$(".slide-control a").eq(i).addClass("on-show").siblings().removeClass("on-show");
		}

	time = setInterval(next,3000);
	$(".slide-div").hover(function(){
		clearInterval(time);
		},function(){
			time = setInterval(next,3000);
			})
	$(".prev").click(prev);	
	$(".next").click(next);
	$(".slide-control a").click(function(){ 
		 i = $(this).index();
		$(".slide-img a").eq(i).fadeIn(100).siblings().fadeOut(100);	
		$(".slide-control a").eq(i).addClass("on-show").siblings().removeClass("on-show");		
	});
})