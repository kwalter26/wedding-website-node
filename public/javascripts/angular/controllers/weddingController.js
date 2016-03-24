angular.module('weddingApp')
    .controller('weddingController',function($scope){
       $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-164.jpg")'
            });
        } 
    });