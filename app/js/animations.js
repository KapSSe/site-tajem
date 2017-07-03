/*$(document).ready(function(){
    $('.logoanimate').toggleClass('animated flipInX');
});*/
$(document).scroll(function(){
              $('.logobiganimate').toggleClass('init animated fadeInLeft', $(this).scrollTop() > 310);
              
              $('.exp-1').toggleClass('init animated fadeInLeft', $(this).scrollTop() > 1600);
              $('.exp-2').toggleClass('init animated fadeInDown', $(this).scrollTop() > 1600);
              $('.exp-3').toggleClass('init animated fadeInRight', $(this).scrollTop() > 1600);
              $('.exp-4').toggleClass('init animated fadeInLeft', $(this).scrollTop() > 1800);
              $('.exp-5').toggleClass('init animated fadeInUp', $(this).scrollTop() > 1800);
              $('.exp-6').toggleClass('init animated fadeInRight', $(this).scrollTop() > 1800);
              
              $('.th-1').toggleClass('init animated bounceInLeft', $(this).scrollTop() > 2550);
                 $('.td-1').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2550);
                    $('.tp-1').toggleClass('init animated flipInX', $(this).scrollTop() > 2550);       
              $('.th-2').toggleClass('init animated bounceInLeft', $(this).scrollTop() > 2550);
                 $('.td-2').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2550);
                    $('.tp-2').toggleClass('init animated flipInX', $(this).scrollTop() > 2550);
              $('.th-3').toggleClass('init animated bounceInRight', $(this).scrollTop() > 2550);
                  $('.td-3').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2550);
                    $('.tp-3').toggleClass('init animated flipInX', $(this).scrollTop() > 2550);
              $('.th-4').toggleClass('init animated bounceInRight', $(this).scrollTop() > 2550);
                 $('.td-4').toggleClass('init animated fadeInUpBig', $(this).scrollTop() > 2550);
                    $('.tp-4').toggleClass('init animated flipInX', $(this).scrollTop() > 2550);
              
              $('.gal-1').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3250);
              $('.gal-2').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3450);
              $('.gal-3').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3650);
              $('.gal-4').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3250);
              $('.gal-5').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3450);
              $('.gal-6').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3650);
              $('.gal-7').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3250);
              $('.gal-8').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3450);
              $('.gal-9').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3650);
              $('.gal-10').toggleClass('init animated zoomInRight', $(this).scrollTop() > 3250);
              $('.gal-11').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3450);
              $('.gal-12').toggleClass('init animated zoomInLeft', $(this).scrollTop() > 3650);
 	});