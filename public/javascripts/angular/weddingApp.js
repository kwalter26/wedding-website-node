/**
 * Created by Kyle Walter on 2/27/2016.
 */

angular.module('weddingApp', ['ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when('/home',{
                templateUrl : 'partial/home.jade',
                controller : 'homeController'
            })
            .when('/ourstory',{
                templateUrl : 'partial/ourstory.jade',
                controller : 'ourstoryController'
            })
            .when('/weddingparty',{
                templateUrl : 'partial/weddingparty.jade',
                controller : 'weddingpartyController'
            });
        $locationProvider.html5Mode(true);
    })
    .controller('mainController',function($scope){

        var screenHeight = $(window).height();
        var screenRatio = 1;

        resize();
        window.addEventListener("resize", function(){
            updateRatio();
            resize();
        });

        function resize(){
            updateRatio();

            var contentSize = $('.main-content').height();
            console.log(contentSize);
            console.log(screenHeight);

            if(contentSize > screenHeight){
                $('body').css('overflow-y','visible');
            }else{
                $('body').css('overflow-y','hidden');
            }

            $('h1.resizable').css('font-size',(70 * screenRatio) + "px"); // Title
            $('h2.resizable').css('font-size',(50 * screenRatio) + "px"); //
            $('h3.resizable').css('font-size',(40 * screenRatio) + "px"); // Date
            $('h4.resizable').css('font-size',(36 * screenRatio) + "px");
            $('h5.resizable').css('font-size',(30 * screenRatio) + "px"); // Date
            $('h6.resizable').css('font-size',(25 * screenRatio) + "px"); // Date
            $('a.resizable').css('font-size',(40 * screenRatio) + "px");
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
    });