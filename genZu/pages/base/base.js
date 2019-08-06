$(function(){
	
	$(".g-goTop").click(function(){
		$("html,body").animate({scrollTop:0})
	})
	
	$(".g-navbar-toggle").click(function(){
		console.log($(".g-navbar-toggle span")[0].className)
		if("icon-align-justify"==$(".g-navbar-toggle span")[0].className){
			$(".g-navbar-toggle span").removeClass("icon-align-justify").addClass("icon-remove")
			
			
			$("#g-nav-list").slideDown()
		}else{
			$(".g-navbar-toggle span").removeClass("icon-remove").addClass("icon-align-justify")
			$("#g-nav-list").slideUp()
		}
	})
	$(window).scroll(function(){
		 scrTop()
	})
	 scrTop()
	function scrTop(){
		if($(this).scrollTop() >=$("header").height()){
			$("#g-nav").addClass("active")
		}else{
			$("#g-nav").removeClass("active")
		}
	}
})