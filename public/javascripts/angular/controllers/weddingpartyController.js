/**
 * Created by Kyle Walter on 3/8/2016.
 */
angular.module('weddingApp')
    .controller('weddingpartyController',function($scope){
        $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-90.jpg")'
            });
        }
    });