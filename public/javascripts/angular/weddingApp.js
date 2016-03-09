/**
 * Created by Kyle Walter on 2/27/2016.
 */

angular.module('weddingApp', ['ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider
            .when('/',{
                templateUrl : 'partial/home.jade',
                controller : 'homeController'
            })
            .when('/ourstory',{
                templateUrl : 'partial/ourstory.jade',
                controller : 'ourstoryController'
            });
        $locationProvider.html5Mode(true);
    });