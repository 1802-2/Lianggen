$(function(){
	let index=0;
	$(".g-tab-perv").click(function(){
		index--;
		index=index<=0? 0:index;
		let l=$(".g-tab-inner").width()*2;
		$(".g-tab-content").animate({
			left:-l*index
		})
	})
	$(".g-tab-next").click(function(){
		index++;
		index=index>=3? 3:index;
		let l=$(".g-tab-inner").width()*2;
		$(".g-tab-content").animate({
			left:-l*index
		})
	})
})