/**
 * Created by tammyrobinson on 4/29/17.
 */
(function () {
  'use strict';
  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['items', 'FindMatchService', 'UserService'];
  function SignUpController(items, FindMatchService, UserService){
    var vm = this;
    vm.items  = items.menu_items;
    vm.master = {};
    vm.user   = {};
    vm.fav    = {};

    vm.reset = function () {
      vm.fav.msg = ' ';
      vm.fav.err = false;
    };

    vm.getFavItem = function () {
      var value    = vm.user.favItem,
          valueLen = value.length,
          isMatch  = FindMatchService.isMatch(value, vm.items);

      if(valueLen > 0 && isMatch){
        vm.user.fav = FindMatchService.getMatch();
        vm.reset();
      }else {
        vm.fav.msg = 'No such menu item exists.';
        vm.fav.err = true;
      }

      if(valueLen === 0) {
        vm.reset();
      }
    };

    vm.save = function (form) {
      // save user info to service
      UserService.setUser(vm.user);

      // clear and reset form
      vm.user = angular.copy(vm.master);
      form.$setPristine();
      form.$setUntouched();

      vm.submitted = true;
    };
  }
})();