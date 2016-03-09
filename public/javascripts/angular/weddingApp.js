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

    });