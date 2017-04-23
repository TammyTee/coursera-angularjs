(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryListController', CategoryListController);

    CategoryListController.$inject = ['categories'];

    function CategoryListController(categories){
        var vm = this;

        vm.categories = categories;
    }
})();