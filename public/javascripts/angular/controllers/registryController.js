/**
 * Created by Kyle Walter on 3/10/2016.
 */
angular.module('weddingApp')
    .controller('registryController',function($scope){
        $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-151.jpg")'
            });
        }
    });