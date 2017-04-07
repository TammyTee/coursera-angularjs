(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('MainController', MainController)

        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    MainController.$inject  = ['ShoppingListCheckOffService'];

    function MainController(ShoppingListCheckOffService) {
        var vm = this;

        vm.items =  ShoppingListCheckOffService.getItems();
        vm.init = function(){
            ShoppingListCheckOffService.refresh();
        }
    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var vm = this;

        vm.groceries  = ShoppingListCheckOffService.getItems();

        vm.buyGrocery = function (a, b) {
            ShoppingListCheckOffService.buyItem(a, b);
        };
    }

    AlreadyBoughtController.$inject   = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var vm = this;

        vm.boughtItems = ShoppingListCheckOffService.getBought();
    }

    ShoppingListCheckOffService.$inject = [];

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuy = [
            {name : 'cookies', qty: 10},
            {name : 'bananas', qty:  3},
            {name : 'bread loaf', qty: 1},
            {name : 'bags of chips', qty: 5},
            {name : 'bottles of water', qty: 12}
        ];

        var items = angular.copy(toBuy);
        var boughtItems = [];

        service.getItems = function(){
            return toBuy;
        };

        service.getBought = function () {
          return boughtItems;
        };

        service.buyItem = function(item, idx){
            toBuy.splice(idx, 1);
            boughtItems.push(item);
        };

        service.refresh = function () {
            boughtItems.splice(0, boughtItems.length); toBuy.splice(0, toBuy.length);

            for (var i = 0; i < items.length; i++){
                var obj = {name : items[i].name, qty: items[i].qty};
                toBuy.push(obj);
            }
        }
    }
})();