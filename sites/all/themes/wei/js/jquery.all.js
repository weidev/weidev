$(document).ready(function () {
	
	$('.banner').slides({
		preload: true,
		container: 'container', // string, Class name for slides container. Default is "slides_container"
		generateNextPrev: false, // boolean, Auto generate next/prev buttons
		generatePagination: false, // boolean, Auto generate pagination
		effect: 'fade', // string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
		crossfade: true, // boolean, Crossfade images in a image based slideshow
		play: 3000, // number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
		pause: 100, // number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
		hoverPause: true // boolean, Set to true and hovering over slideshow will pause it
	});
	
	$('#slides').slides({
		preload: true,
		container: 'slideContainer', // string, Class name for slides container. Default is "slides_container"
		generateNextPrev: false, // boolean, Auto generate next/prev buttons
		generatePagination: false, // boolean, Auto generate pagination
		effect: 'fade', // string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
		crossfade: true, // boolean, Crossfade images in a image based slideshow
		autoHeight: true, // boolean, Set to true to auto adjust height
		play: 0, // number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
		pause: 100, // number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
		hoverPause: false // boolean, Set to true and hovering over slideshow will pause it
	});
	
	$('#mycarousel').jcarousel({
		scroll: 1,
		auto: 0,
        wrap: 'last'
    });
	
	$( "#tabs, #tabs11" ).tabs();
	
	$( "#datepicker" ).datepicker();
	
	/*$(".jcarousel-item").mouseover(function(){
		$(this).css("cursor","pointer")
		$(this).parents('.jcarousel-item').find('.gall-box').css("display","none")
		$('.gall-box.hidden').animate({width: "249px", height:"275px", position:"relative", marginTop:"-66px", marginLeft:"-0px"}, 'fast')
	
	}).mouseout(function(){
		$(this).parents('.jcarousel-item').find('.gall-box').css("display","block")
		$(this).animate({width: "249px", height:"155px", position:"static", marginTop:"-0px", marginLeft:"-0px"}, 'fast') 
	});*/
});
