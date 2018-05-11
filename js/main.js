$(document).ready(function(){

	// $(".vignette").animate({boxShadow: "0, 0, 0 rgba(0,0,0,0)"}, "1000");

	$(".dropdown-content").hide();

	$(".dropdown").hover(function(){
		$(this).children(".dropdown-content").slideToggle();
		console.log("hello");
	})

	$(".dropdown").mouseover(function(){
		$(this).children(".dropbtn").css("background-color", "rgba(0, 0, 0, .3)");
		$(this).children(".dropbtn").css("border-radius", "15px");
	})

	$(".dropdown").mouseleave(function(){
		$(this).children(".dropbtn").css("background-color", "rgba(0, 0, 0, 0)");
	})





})

