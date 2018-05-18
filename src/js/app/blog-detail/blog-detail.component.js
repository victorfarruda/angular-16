'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($http, $location, $routeParams, $scope){
            $http.get('/json/posts.json', {}).then(successCallback, errorCallback)

            function successCallback(response, status, config, statusText){
                $scope.notFound = true
                var blogItems = response.data
                $scope.posts = blogItems
                angular.forEach(blogItems, function(post){
                    if (post.id == $routeParams.id){
                        $scope.post = post
                        $scope.notFound = false
                        console.log(post)
                    }
                })
            }
            function errorCallback(response, status, config, statusText){
                $scope.notFound = true
                console.log(response)
            }
//            angular.forEach(blogItems, function(post){
//                if (post.id == $routeParams.id){
//                    $scope.post = post
//                    $scope.notFound = false
//                }
//            })

            if ($scope.notFound){
                $location.path("/404")
            }
        }
    });