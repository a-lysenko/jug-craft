(function () {
    'use strict';

    angular.module('acc')
        .component('accHeader', {
            templateUrl: 'header/header.html',
            controller: 'HeaderController',
            controllerAs: '$ctrl'
        });
})();
