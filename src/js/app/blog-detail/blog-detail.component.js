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
                        resetReply()
                    }
                })
                if ($scope.notFound){
                    $location.path("/404")
                }
            })

            $scope.deleteComment = function(comment){
                $scope.$apply(
                    $scope.post.comments.splice(comment, 1)
                )
            }

            $scope.addReplay = function(){
//                console.log($scope.reply)
                $scope.post.comments.push($scope.reply)
                resetReply()
            }

            function resetReply(){
                $scope.reply = {
                    'id': $scope.post.comments.length + 1,
                    'text': ''
                }
            }
        }
    });