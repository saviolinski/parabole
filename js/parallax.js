$.fn.scrollBottom = function() { 
    return $(document).height() - this.scrollTop() - this.height(); 
};


$(window).scroll(function() {
	parallax();
    // gallerytriger();
})

function parallax() {
	var wScroll = $(window).scrollTop();

	$('.parallax-bg1').css('background-position', 'center '+(wScroll*0.2)+'px');
    if ($(window).width() < 1024) {
        $('.parallax-bg2').css('background-position', 'center '+(180+wScroll*0.4)+'px');
    } else {
        $('.parallax-bg2').css('background-position', 'center '+(290+wScroll*0.4)+'px');
    }
	
}

// function gallerytriger() {
    
//     if (!$("div[class^='gale']").hasClass("galeon")) {
//         var wScroll = $(window).scrollBottom();
//         console.log(wScroll);
//         if (wScroll >= 650) {
//             $(".gale1").css('height', '50vh');
//             $(".gale7").css('height', '7vh');
//         } else if (wScroll <= 649){
//             $(".gale7").css('height', '50vh');
//             $(".gale1").css('height', '7vh');
//         }
//     }
// }

$(document).ready(function(){
    $("div[class^='gale']").mouseover(function(){
        if ($("div[class^='gale']").hasClass('galeon')) {
            $("div[class^='gale']").removeClass('galeon')
        }
        $(this).addClass('galeon');
    });
});


