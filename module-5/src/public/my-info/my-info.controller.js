(function(){
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService', 'ApiPath'];
  function MyInfoController(UserService, ApiPath) {
    var vm = this;
    vm.user     = {};
    vm.basePath = ApiPath;

    vm.getUser = function(){
      vm.user = UserService.getUser();
      if(vm.user){
        if(vm.user.fav){
          vm.favShortName = vm.user.fav.short_name;
          vm.favName      = vm.user.fav.name;
        }
      }
    };

    vm.getUser();
  }
})();