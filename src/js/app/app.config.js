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
              when("/blog", {
                template: "<blog-list></blog-list>"
              }).
              when("/blog/:id", {
                  template: "<blog-detail></blog-detail>"
              }).
//              when("/blog/:id/:abc", {
//                  template: "<blog-list></blog-list>"
//              }).
//              when("/about", {
//                  templateUrl: "/templates/about.html"
//              }).
              otherwise({
                  template: "Not Found"
              })

    });