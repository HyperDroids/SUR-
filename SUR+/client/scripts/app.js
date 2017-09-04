'use strict';

angular.module('confusionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })






            // route for the items page
            .state('app.items', {
                url:'items',
                views: {
                    'content@': {
                        templateUrl : 'views/items.html',
                        controller  : 'ItemsController'
                    },
                }
            })





          // route for the edit_item page
           .state('app.edititem', {
                url:'items/edit/:id',
                  views: {
                    'content@': {
                      templateUrl : 'views/edit_item.html',
                      controller  : 'ItemsController'
                 },
                }
              })





              // route for the items page
                .state('app.additem', {
                    url:'items/add',
                    views: {
                      'content@': {
                        templateUrl : 'views/add_item.html',
                        controller  : 'ItemsController'
                    },
                  }
                })



              // route for the items page
                .state('app.itemdetails', {
              url:'items/details/:id',
                  views: {
                    'content@': {
                    templateUrl : 'views/item_details.html',
                    controller  : 'ItemsController'
                  },
                 }
              })



        $urlRouterProvider.otherwise('/');
    })
;
