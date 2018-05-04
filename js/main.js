$(document).ready(function(){

	$(".dropdown-content").hide();

	$(".dropdown").hover(function(){
		$(this).children(".dropdown-content").slideToggle();
		console.log("hello");
	})

})