var weddingApp = angular.module('weddingApp', []);

function weddingController($scope) {


    var screenHeight = $(window).height()-95;
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



    $scope.getHome = function() {
        $('#main-content').fadeOut('slow');
    };

    $scope.getOurStory = function(){
        switchContent('ourstory');
    };

    $scope.getWeddingParty = function(){
        switchContent('weddingparty');
    };

    function switchContent(content){
        $('#main-content').fadeOut('slow',function(){
            $('.article').fadeOut('fast');
            $('.' + content).fadeIn('fast',function(){
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