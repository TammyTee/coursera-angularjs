(function(){
  'use strict';

  angular.module('common')
    .service('FindMatchService',FindMatchService);

  FindMatchService.$inject = [];
  function FindMatchService() {
    var service = this;

    service.match = {};

    service.isMatch = function (elem, arr) {
      var match = false;
      for(var i = 0; i < arr.length; i += 1){
        if(arr[i].short_name.toLowerCase() === elem.toLowerCase()) {
          match = true;
          service.match = arr[i];
          return match;
        }
      }
    };

    service.getMatch = function () {
      return service.match;
    };

    return {
      isMatch : service.isMatch,
      getMatch: service.getMatch
    }
  }
})();
