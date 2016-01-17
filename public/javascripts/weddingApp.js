var weddingApp = angular.module('weddingApp', []);

function weddingController($scope) {

    // Initialize local variables ========================
    var screenHeight = $(window).height()-95;
    var screenRatio = 1;

    // Set background height to full screen ==============
    resize();
    window.addEventListener("resize", function(){
        updateRatio();
        resize();
    });

    // Fade in background ================================
    $('.background').fadeIn('slow',function(){
        $('#main-menu').fadeIn('slow');
    });


    // Content change functions ==========================
    $scope.getHome = function() {
        switchContent('#',78);
    };

    $scope.getOurStory = function(){
        switchContent('ourstory',115);
    };

    $scope.getWeddingParty = function(){
        switchContent('weddingparty',129);
    };

    $scope.getTheWedding = function(){
        switchContent('thewedding',124);
    };

    $scope.getTravel = function(){
        switchContent('travel',129);
    };

    $scope.getSong = function(){
        switchContent('songrequest',51);
    };

    $scope.getRegistry = function(){
        switchContent('registry',40);
    };

    $scope.getRSVP = function(){
        switchContent('rsvp',40);
    };

    // Helper Functions =================================
    function switchContent(link,pic){
        $('#main-jumbo').animate({opacity: 0}, 'slow', function() {
            $(this)
                .css({'background-image': 'url(/images/Kyle_Katie_Engagement-'+pic+'.jpg)'})
                .animate({opacity: 1},800);
        });
        $('#main-content').fadeOut('slow',function(){
            $('.article').fadeOut('fast');
            $('.' + link).fadeIn('fast',function(){
                $('#main-content').fadeIn('slow');
            });
        });
    }
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

};