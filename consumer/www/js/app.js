// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.store', {
    url: '/store',
    views: {
      'menuContent': {
        templateUrl: 'templates/store.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.rewards', {
      url: '/rewards',
      views: {
        'menuContent': {
          templateUrl: 'templates/rewards.html'
        }
      }
    })
  .state('app.points', {
      url: '/points',
      views: {
        'menuContent': {
          templateUrl: 'templates/points.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.invite', {
      url: '/invite',
      views: {
        'menuContent': {
          templateUrl: 'templates/points.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.find', {
    url: '/find',
    views: {
      'menuContent': {
        templateUrl: 'templates/find.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/store');
});