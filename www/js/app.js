// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('test', {
        url: '/test',
        templateUrl: 'templates/test.html'
    })

    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
    })

    .state('hello', {
        url: '/hello',
        templateUrl: 'templates/hello.html'
    })

    .state('posts', {
        url: '/posts',
        templateUrl: 'templates/posts.html',
        controller: 'PostsCtrl'
    })

    .state('post-detail', {
        url: '/posts/:postId',
        templateUrl: 'templates/post-detail.html',
        controller: 'PostDetailCtrl'
    })

    .state('schedule', {
    	url: '/schedule',
    	templateUrl: 'templates/schedule.html',
    	controller: 'ScheduleCtrl'
    })
});