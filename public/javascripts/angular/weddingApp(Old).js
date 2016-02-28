var weddingApp = angular.module('weddingApp', []);

function weddingController($scope,$http) {

    // Initialize local variables ========================
    var screenHeight = $(window).height();
    var screenRatio = 1;
    var minScreenHeight = 662;

    // Initialize app page variables
    $scope.hits = '0';
    $scope.status = 'up';

    // Clock count down
    var targetDate = new Date(2016,06,9);
    setInterval(function(){
        var d = countdown(targetDate)
        $('.month').text(d.months);
        $('.day').text(d.days);
        $('.hour').text(d.hours);
        $('.min').text(d.minutes);
        $('.sec').text(d.seconds);
    },1000);

    // Set background height to full screen ==============
    resize();
    window.addEventListener("resize", function(){
        updateRatio();
        resize();
    });

    // Fade in background ================================
    $('.background.in').fadeIn('slow',function(){
        $('.main-content').fadeIn('slow',function(){
            $('#main-menu').fadeIn('slow',function(){
                $('.home').fadeIn('fast',function(){
                    $('#main-content').fadeIn('fast');
                })
            });
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
    $scope.getContact = function(){
        switchContent('contact',53)
    };
    $scope.getAdmin = function(){
        $http.get('/api/data')
            .success(function(data){
                console.log(data);
                $scope.hits = data.hits;
                if(data.down)
                    $scope.status = 'down';
                else
                    $scope.status = 'up';
            }).error(function(data){
                console.log(data);
            });
        switchContent('admintools',53);

    }

    $scope.toggleStatus = function(){
        $http.post('/api/data/update')
            .success(function(data){

            }).error(function(data){

            });
        $http.get('/api/data')
            .success(function(data){
                console.log(data);
                $scope.hits = data.hits;
                if(data.down)
                    $scope.status = 'down';
                else
                    $scope.status = 'up';
            }).error(function(data){
            console.log(data);
        });
    }

    // Registry Links
    $('.pic-link').on('mouseover',function(){
        $(this).animate()
    })

    // Link Animation ===================================
    $scope.linkAnimation = function(){
        $('.menu-link')
    };

    // Picture Modal
    $scope.picModal = function(evt){

        var image = $(evt.target).attr('src');
        console.log(image)
        $('#modalImg').attr('src',image);
        $('#picModal').modal('show');
    };
    $("#picModal").on("show", function () {
        $("body").addClass("modal-open");
    }).on("hidden", function () {
        $("body").removeClass("modal-open")
    });

    // Helper Functions =================================
    function switchContent(link,pic){
        $('.background.out').css('background','url("/images/Kyle_Katie_Engagement-'+pic+'.jpg")').css('background-size','cover');
        $('.background.out').fadeIn('slow',function(){
            $('.background').toggleClass('in');
        });
        $('.background.in').fadeOut('slow',function(){
            $('.background').toggleClass('out');
            $('#main-content').fadeOut('slow',function(){
                $('.article').fadeOut('fast');
                if(link != 'home'){
                    $(this).addClass('panel panel-default contentBackground')
                }else{
                    $(this).removeClass('panel panel-default contentBackground')
                }
                $('.' + link).fadeIn('slow',function(){
                    $('#main-content').fadeIn('slow',function(){
                        resize();
                    });
                });
            });
        });






    }
    function resize(){
        updateRatio();

        var contentSize = $('#main-content').height();
        console.log(contentSize);
        console.log(screenHeight);

        if(contentSize > screenHeight){
            $('body').css('overflow-y','visible');
        }else{
            $('body').css('overflow-y','hidden');
        }

        $('.background').height(screenHeight);

        $('h1.resizable').css('font-size',(70 * screenRatio) + "px"); // Title
        $('h2.resizable').css('font-size',(35 * screenRatio) + "px"); //
        $('h3.resizable').css('font-size',(25 * screenRatio) + "px"); // Date
        $('h4.resizable').css('font-size',(20 * screenRatio) + "px");
        $('a.resizable').css('font-size',(50 * screenRatio) + "px");
        $('p.resizable').css('font-size',(30 * screenRatio) + "px");
        $('.resizable').css('margin-bottom',(5 * screenRatio * 0.05))
            .css('margin-top',(5 * screenRatio * 0.05));
        $('.resizable-hr').css('margin-bottom',(40 * screenRatio * 0.2))
            .css('margin-top',(40 * screenRatio * 0.2));

        console.log(screenHeight)

    }
    function updateRatio(){
        screenHeight = $(window).height();
        screenRatio = screenHeight / 900;
    }
};