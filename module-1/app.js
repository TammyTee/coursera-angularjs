(function(){
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.lunchItems = '';

    $scope.countLunchItems = function(){
        var totalItems = splitString($scope.lunchItems);
        console.log(totalItems);

        if(totalItems == 0)
            $scope.message = 'Please Enter Data First';
        else if (totalItems <= 3)
            $scope.message = 'Enjoy!';
        else
            $scope.message = 'Too Much!'
    };

    function splitString(string){
        var items = [];

        if(string.includes(','))
            items = string.split(',');
        else
            items = string.split(' ');


        for(var i = 0; i < items.length; i++) {
            if (items[i] == ' ' || items[i] == '') {
                items.splice(i, 1);
                i--;
            }
        }
        return items.length;
    }
}
})();