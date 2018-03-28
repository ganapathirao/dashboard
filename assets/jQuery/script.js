$(document).ready(function(){
	
	$(".badge1").click(function(){
		$("#notifications-dropdown").fadeOut();
		$("#tasks-dropdown").fadeOut();
		$("#user-dropdown").fadeOut();
		$("#messages-dropdown").fadeToggle();
	});

	$(".badge2").click(function(){
		$("#messages-dropdown").fadeOut();
		$("#tasks-dropdown").fadeOut();
		$("#user-dropdown").fadeOut();
		$("#notifications-dropdown").fadeToggle(); 
	});

	$(".badge3").click(function(){
		$("#notifications-dropdown").fadeOut();
		$("#messages-dropdown").fadeOut();
		$("#user-dropdown").fadeOut();
		$("#tasks-dropdown").fadeToggle();
	});

	$(".user-name").click(function(){
		$("#notifications-dropdown").fadeOut();
		$("#messages-dropdown").fadeOut();
		$("#tasks-dropdown").fadeOut();
		$("#user-dropdown").fadeToggle();
	});

	$(".toggle-side-nav").click(function(){
	    $(".side-nav").animate({
	      width: "toggle"
	    });
	});

	 $("#charts-toggle").click(function(){
		$(".charts-childs").fadeToggle();
		$("i", this).toggleClass("fa fa-angle-down fa fa-angle-left");
	});

});