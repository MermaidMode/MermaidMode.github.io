$(document).ready(function(){


	$(".dropdown-content").hide();

	$(".dropdown").hover(function(){
		$(this).children(".dropdown-content").slideToggle();
		$(this).children(".dropdown-content").css("border-radius", "15px");
		console.log("hello");
	})

	$(".dropdown").mouseover(function(){
		$(this).children(".dropbtn").css("background-color", "rgba(0, 0, 0, .3)");
		$(this).children(".dropbtn").css("border-radius", "15px");
		$(this).children(".dropbtn").css("transition", "1s");
	})

	$(".dropdown").mouseleave(function(){
		$(this).children(".dropbtn").css("background-color", "rgba(0, 0, 0, 0)");
		$(this).children(".dropbtn").animate({transition: "1s"});
		// $(this).children(".dropbtn").css("transition", "1s");
	})

	$(".logo").mouseover(function(){
		$(".logo").effect("bounce",{times:4},slow);
	})

	$(".logo").mouseleave(function(){
		$(".logo").effect("bounce",{times:0},0);
	})


// $(this).children(".dropbtn").animate({background-color: "rgba(0, 0, 0, 0)"}, 1s);
	
		
})

