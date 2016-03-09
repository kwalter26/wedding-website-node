/**
 * Created by Kyle Walter on 3/8/2016.
 */
angular.module('weddingApp')
    .controller('ourstoryController',function($scope){
        $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-46.jpg")'
            });
            console.log('init2');
        }
    });
