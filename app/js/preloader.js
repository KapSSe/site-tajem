        $(window).on('load', function() {  
            $('#status').fadeOut();  
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
          })