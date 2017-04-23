/**
 * Created by tammyrobinson on 4/22/17.
 */
(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService ($http){
        var service = this;

        // retrieves all menu categories from the REST API
        service.getAllCategories = function(){
            return $http({ method: 'GET', url: ('https://davids-restaurant.herokuapp.com/categories.json') })
                .then(function (res) {
                    return res.data;
                }, function(err){
                    console.error('Something went wrong retrieving menu categories!');
                })
        };

        // retrieves all menu items of a category from the REST API
        service.getItemsForCategory = function(categoryShortName){
            return $http({ method: 'GET', url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)})
                .then(function (res) {
                    return res.data
                }, function (err) {
                    console.error('Something went wrong retrieving category items!');
                })
        };

        return {
            getAllCategories: service.getAllCategories,
            getItemsForCategory: service.getItemsForCategory
        }
    }
})();