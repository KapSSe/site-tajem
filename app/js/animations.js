/*$(document).ready(function(){
    $('.logoanimate').toggleClass('animated flip');
});*/
$(document).scroll(function(){
              $('.logobiganimate').toggleClass('animated fadeInLeft', $(this).scrollTop() > 100);
              $('.heading-expertise, .subheadinganimate').toggleClass('animated fadeInRight', $(this).scrollTop() > 1400);
              $('.expertise-item').toggleClass('animated fadeInRight', $(this).scrollTop() > 1700);
              $('.gal-item').toggleClass('animated zoomIn', $(this).scrollTop() > 3200);
              $('.clients-items').toggleClass('animated zoomInRight', $(this).scrollTop() > 5000);
 	});