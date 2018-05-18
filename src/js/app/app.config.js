'use strict';

angular.module('try').
    config(
        function(
          $locationProvider,
          $resourceProvider,
          $routeProvider
          ){
          
          $locationProvider.html5Mode({
              enabled:true
            })

          $resourceProvider.defaults.stripTrailingSlashes = true;


          $routeProvider.
              when("/", {
                template: "<blog-list></blog-list>"
              }).
              when("/blog/1", {
                  template: "<h1>Hi</h1>"
              }).
              when("/blog/2", {
                  template: "<blog-list></blog-list>"
              }).
              when("/about", {
                  templateUrl: "/templates/about.html"
              }).
              otherwise({
                  template: "Not Found"
              })

    });