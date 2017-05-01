(function () {
  'use strict';

  angular.module('common')
    .service('UserService', UserService);

  UserService.$inject = [];
  function UserService() {
    var service = this;

    // set user
    service.setUser = function(user){
      delete user['favItem'];
      service.user = angular.copy(user);
    };

    // get user
    service.getUser = function () {
      return service.user;
    };

    return {
      setUser : service.setUser,
      getUser : service.getUser
    }
  }
})();