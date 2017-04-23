/**
 * Created by tammyrobinson on 4/22/17.
 */
(function(){
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menuapp/templates/categorylist-component.template.html',
            bindings: {
                categories: '<'
            }
        });
})();