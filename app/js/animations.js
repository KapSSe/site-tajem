/*$(document).ready(function(){
    $('.logoanimate').toggleClass('animated flip');
});*/
$(document).scroll(function(){
              $('.logobiganimate').toggleClass('animated fadeInLeft', $(this).scrollTop() > 100);
              $('.heading-expertise,.expertise-item, .subheadinganimate').toggleClass('animated fadeInRight', $(this).scrollTop() > 1600);
              $('.gal-item').toggleClass('animated zoomIn', $(this).scrollTop() > 3200);
 	});