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
		$(this).children(".dropbtn").css("border-radius", "15px");
		$(this).children(".dropbtn").css("transition", "1s");
	})



})

