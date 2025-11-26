$("document").ready(function(){
     $(window).scroll(function (){
                if($(window).scrollTop() > 300){
                    $('.bx-chevron-up').css({
                        "opacity":"1", "pointer-events":"auto"
                    });
                }else{
                    $('.bx-chevron-up').css({
                        "opacity":"0", "pointer-events":"none"
                    });
                }
            });
            $('.bx-chevron-up').click(function(){
                $('html').animate({scrollTop:0}, 500);
            });
        });