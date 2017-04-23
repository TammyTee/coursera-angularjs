/**
 * Created by tammyrobinson on 4/22/17.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home if not other URL match defined states
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })

            .state('category', {
                url: '/categories-list',
                templateUrl: 'src/menuapp/templates/categorylist.template.html',
                controller: 'CategoryListController as cList',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/category-detail/{categoryId}',
                templateUrl: 'src/menuapp/templates/categorydetail.template.html',
                controller: 'CategoryDetailListController as cDetailList',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
                        return MenuDataService.getItemsForCategory($stateParams.categoryId)
                            .then(function (items) {
                                return items;
                            })
                    }]
                }
            })
    }
})();