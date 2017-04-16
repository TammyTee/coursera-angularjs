/**
 * Created by tammyrobinson on 4/15/17.
 */
(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var vm = this;

        vm.searchTerm = '';

        vm.retrieveMatches = function(){
            MenuSearchService.matchedItems(vm.searchTerm).then(function (matches) {
                vm.found = matches;
                vm.resultCount = vm.found.length + ' results';
            });
        };

        vm.removeItem = function (index) {
           vm.found.splice(index, 1);
           vm.resultCount = vm.found.length + ' results';
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath){
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){
            return $http({method: 'GET', url: (ApiBasePath + '/menu_items.json')}).then(function(res){

                var items   = res.data.menu_items, len = items.length,
                    matches = [], i = 0;

                if(searchTerm !== ''){
                    for(i; i < len; i++){
                        if(items[i].description.includes(searchTerm.toLowerCase()))
                            matches.push(items[i]);
                    }
                }
                return matches;

            }, function(err){
                console.error('Something went wrong!');
            })
        };

        return {
            matchedItems : service.getMatchedMenuItems
        }
    }

    function FoundItemsDirective() {
        var ddo;

        ddo = {
            restrict: 'E',
            templateUrl: 'found-items.html',
            scope: {
                matches: '<',
                onRemove: '&',
                myCount : '@count'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }
    function FoundItemsDirectiveController() {}
})();