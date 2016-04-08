/**
 * Created by Kyle Walter on 3/8/2016.
 */
angular.module('weddingApp')
    .controller('homeController',function($scope){
        $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-78.jpg")'
            });
            $('.countDown').countdown('2016/07/09 14:00:00',{elapse:true})
                .on('update.countdown',function(event){
                    $('.month').text(event.strftime('%m'));
                    $('.day').text(event.strftime('%d'));
                    $('.hour').text(event.strftime('%H'));
                    $('.min').text(event.strftime('%M'));
                    $('.sec').text(event.strftime('%S'));
                });
        }
    });