/**
 * Created by tammyrobinson on 4/22/17.
 */
(function(){
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/menuapp/templates/categorydetail-component.template.html',
            bindings: {
                items: '<'
            }
        });
})();