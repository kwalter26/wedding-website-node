/**
 * Created by Kyle Walter on 3/10/2016.
 */
angular.module('weddingApp')
    .controller('adminController',function($scope,$http){
        $scope.init = function(){
            $('body').css({
                'background-image':'url("/images/Kyle_Katie_Engagement-53.jpg")'
            });
            getHits();
            getMusic();
        }

        $scope.hits = 0;
        $scope.music = [];

        var getHits = function(){
            console.log('Hits');
            $http.get('/api/data')
                .success(function(data){
                    $scope.hits = data.hits;
                });
        }

        var getMusic = function(){
            $http.get('/api/music')
                .success(function(music){
                    $scope.music = music;
                });
        }

        $scope.deleteMusic = function(id){
            $http.get('/api/music/delete/' + id)
                .success(function(music){
                    $scope.music = music;
                });
        }
    });