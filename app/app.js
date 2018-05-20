'use strict';

var prefix = 'components/';

// Declare app level module which depends on views, and components
angular.module('tussreiber', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
          .when('/', {templateUrl: prefix + 'home/home.html'})
          .when('/news/:id', {templateUrl: function(urlattr) {
              return prefix + 'news/news_' + urlattr.id + '.html'
          }})
          .when('/team', {templateUrl: prefix + 'team/team.html'})
          .when('/team/:name', {templateUrl: function(urlattr) {
              return prefix + 'team/' + urlattr.name + '.html'
          }})
          .when('/gallery', {templateUrl: prefix + 'gallery/galerie.html'})
          .when('/detail', {templateUrl: prefix + 'gallery/gallery.html'})
          .when('/calendar', {templateUrl: prefix + 'calendar/calendar.html'})
          .when('/journey', {templateUrl: prefix + 'journey/journey.html'})
          .when('/privacy', {templateUrl: prefix + 'dataprivacy/privacy.html'})
          .otherwise({redirectTo: '/'})
    })
    .directive('previous', function() {
        return {
            restrict: 'E',
            scope: {
                ref: '='
            },
            template: '<div class="previous"><span><a ng-href="#/news/{{ref}}" title="Zur&uuml;ck">&lt;&lt; Previous</a></span></div>'
        }
    })
    .directive('next', function() {
        return {
            restrict: 'E',
            scope: {
                ref: '='
            },
            template: '<div class="next"><span><a ng-href="#/news/{{ref}}" title="Vorw&auml;rts">Next &gt;&gt;</a></span></div>'
        }
    });
