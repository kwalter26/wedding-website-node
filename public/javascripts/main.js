/**
 * Created by kyle on 12/23/15.
 */
$(document).ready(function(){


    var screenHeight = $(window).height()-10;
    var screenRatio = 1;

    console.log(screenHeight);

    // Set background height to full screen
    resize();
    window.addEventListener("resize", function(){
        updateRatio();
        resize();
    });


    // Fade in background ================================
    $('.background').fadeIn('slow',function(){
        $('#main-menu').fadeIn('slow');
    });

    // Link Control ======================================
    $('#home-link').on('click',function(){});
    $('#our-story-link').on('click',function(){

        console.log('here');
        $('#main-content').fadeIn('slow');
    });
    $().on('click',function(){});
    $().on('click',function(){});
    $().on('click',function(){});
    $().on('click',function(){});
    $().on('click',function(){});
    $().on('click',function(){});





    function resize(){
        updateRatio();
        $('.background').height(screenHeight);
        $('.section').height(screenHeight);

        $('.menu-link').find('a').css('font-size',(50 * screenRatio *.9) + "px");
        $('.menu-link').css('margin',(5 * screenRatio) + 'px 0px' + (5 * screenRatio) + 'px 0px');
    }

    function updateRatio(){
        screenHeight = $(window).height()-95;
        screenRatio = screenHeight / 900;
    }
});
