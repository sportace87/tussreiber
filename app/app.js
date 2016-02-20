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
          .when('/guestbook', {templateUrl: prefix + 'guestbook/guestbook.html'})
          .when('/journey', {templateUrl: prefix + 'journey/journey.html'})
          .when('/others', {templateUrl: prefix + 'others/others.html'})
          .otherwise({redirectTo: '/'})
    });
