/*$(document).ready(function(){
    $('.logoanimate').toggleClass('animated flip');
});*/
$(document).scroll(function(){
              $('.logobiganimate').toggleClass('animated fadeInLeft', $(this).scrollTop() > 100);
              $('.heading-expertise').toggleClass('animated fadeInRight', $(this).scrollTop() > 1400);
              $('.expertise-item, .subheadinganimate').toggleClass('animated fadeInRight', $(this).scrollTop() > 1500);
              $('.gal-wrap').toggleClass('animated fadeInLeft', $(this).scrollTop() > 3000);
              $('.clients-items').toggleClass('animated zoomInRight', $(this).scrollTop() > 4300);
 	});