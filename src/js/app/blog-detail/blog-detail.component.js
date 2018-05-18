'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function(Post, $location, $routeParams, $scope){
            $scope.posts = Post.query()
            Post.query(function(data){
                $scope.notFound = true
                angular.forEach(data, function(post){
                    if (post.id == $routeParams.id){
                        $scope.post = post
                        $scope.notFound = false
                    }
                })
                if ($scope.notFound){
                    $location.path("/404")
                }
            })
        }
    });