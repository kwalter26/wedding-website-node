/**
 * Created by kyle on 12/23/15.
 */
$(document).ready(function(){

    // Set background height to full screen
    resize();
    window.addEventListener("resize", resize);


    // Fade in background
    $('.background').fadeIn('slow',function(){
        $('.section').fadeIn('slow');
    });

    function resize(){
        $('.background').height($(window).height()-95);
        $('.section').height($(window).height()-95);
    }
});
