'use strict';

angular.module('blogList').
    component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $rootScope, $scope){
            $scope.goToItem =  function (item){
                $rootScope.$apply(function(){
                    $location.path("/blog/" + item.id)
                })
            }
            $scope.items = Post.query();
        }
    });