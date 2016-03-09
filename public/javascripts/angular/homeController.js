/**
 * Created by Kyle Walter on 3/8/2016.
 */
angular.module('weddingApp')
    .controller('homeController',function($scope){
        $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-78.jpg")'
            });
            // Clock count down
            var targetDate = new Date(2016,06,9);
            //setInterval(function(){
            //    var d = countdown(targetDate)
            //    $('.month').text(d.months);
            //    $('.day').text(d.days);
            //    $('.hour').text(d.hours);
            //    $('.min').text(d.minutes);
            //    $('.sec').text(d.seconds);
            //},1000);
            $('.countDown').countdown('2016/07/09',{elapse:true})
                .on('update.countdown',function(event){
                    $('.month').text(event.strftime('%m'));
                    $('.day').text(event.strftime('%d'));
                    $('.hour').text(event.strftime('%H'));
                    $('.min').text(event.strftime('%M'));
                    $('.sec').text(event.strftime('%S'));
                });
        }
    });