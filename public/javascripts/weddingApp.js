var weddingApp = angular.module('weddingApp', []);

function weddingController($scope) {

    // Initialize local variables ========================
    var screenHeight = $(window).height();
    var screenRatio = 1;
    var minScreenHeight = 662;

    // Set background height to full screen ==============
    resize();
    window.addEventListener("resize", function(){
        updateRatio();
        resize();
    });

    // Fade in background ================================
    $('.background.in').fadeIn('slow',function(){
        $('.main-content').fadeIn('slow',function(){
            $('#main-menu').fadeIn('slow');
        });
    });

    // Content change functions ==========================
    $scope.getHome = function() {
        switchContent('home',78);
    };

    $scope.getOurStory = function(){
        switchContent('ourstory',46);
    };

    $scope.getWeddingParty = function(){
        switchContent('weddingparty',90);
    };

    $scope.getTheWedding = function(){
        switchContent('thewedding',164);
    };

    $scope.getTravel = function(){
        switchContent('travel',168);
    };

    $scope.getSong = function(){
        switchContent('songrequest',31);
    };

    $scope.getRegistry = function(){
        switchContent('registry',151);
    };

    $scope.getRSVP = function(){
        switchContent('rsvp',138);
    };

    // Link Animation ===================================
    $scope.linkAnimation = function(){
        $('.menu-link')
    };

    // Helper Functions =================================
    function switchContent(link,pic){
        $('.background.out').css('background','url("/images/Kyle_Katie_Engagement-'+pic+'.jpg")').css('background-size','cover');
        $('.background.out').fadeIn('slow',function(){
            $('.background').toggleClass('in');
        });
        $('.background.in').fadeOut('slow',function(){
            $('.background').toggleClass('out');
            $('#main-content').fadeOut('fast',function(){
                $('.article').fadeOut('fast');
                $('.' + link).fadeIn('fast',function(){
                    $('#main-content').fadeIn('fast');
                });
            });
        });





    }
    function resize(){
        updateRatio();
        $('.background').height(screenHeight);

        $('h1.resizable').css('font-size',(50 * screenRatio) + "px");
        $('h2.resizable').css('font-size',(40 * screenRatio) + "px");
        $('h3.resizable').css('font-size',(30 * screenRatio) + "px");
        $('h4.resizable').css('font-size',(20 * screenRatio) + "px");
        $('a.resizable').css('font-size',(50 * screenRatio) + "px");
        $('.resizable').css('margin-bottom',(5 * screenRatio * 0.05))
            .css('margin-top',(5 * screenRatio * 0.05));

        console.log(screenHeight)

    }
    function updateRatio(){
        screenHeight = $(window).height();
        screenRatio = screenHeight / 900;
    }
};