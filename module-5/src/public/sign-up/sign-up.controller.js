/**
 * Created by tammyrobinson on 4/29/17.
 */
(function () {
  'use strict';
  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['menuItems'];
  function SignUpController(menuItems){
    var vm = this;
    vm.items = menuItems.menu_items;
    vm.user = {};
    vm.fav = {};
    vm.master = {};

    vm.resetErr = function () {
      vm.fav.msg = ' ';
      vm.fav.err = false;
    };

    vm.getFavItem = function (form) {
      var len = vm.items.length;

      if(vm.user.favItem.length > 0){
        for(var i = 0; i < len; i += 1){
          if(vm.items[i].short_name.toLowerCase() === vm.user.favItem.toLowerCase()){
            vm.resetErr();
            return;
          }else {
            vm.fav.msg = 'No such menu item exists.';
            vm.fav.err = true;
          }
        }
      }
      else {
        vm.resetErr();
      }
    };
  }
})();