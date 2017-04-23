(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryDetailListController', CategoryDetailListController);

    CategoryDetailListController.$inject = ['items'];

    function CategoryDetailListController(items){
        var vm = this;
        vm.items = items.menu_items;
        vm.category = items.category.name;
    }
})();