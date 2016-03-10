/**
 * Created by john on 15-8-17.
 */
$(function(){
    var i=0;
    var time=0;
    function next(){
        i++;
        if(i>2)
            i=0;
        $(".banner-img a").eq(i).fadeIn(200).siblings().fadeOut(300);
        $(".banner-btn a").eq(i).addClass("on-show").siblings().removeClass("on-show");
    }
    time = setInterval(next,3000);
    $(".banner-con").hover(function(){
        clearInterval(time);
    },function(){
        time = setInterval(next,3000);
    })
    $(".banner-btn a").click(function(){
			i = $(this).index();
			$(".banner-img a").eq(i).fadeIn(100).siblings().fadeOut(100);
			$(".banner-btn a").eq(i).addClass("on-show").siblings().removeClass("on-show");
		 });
})