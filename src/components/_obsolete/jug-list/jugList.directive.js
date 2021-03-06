(function () {
    'use strict';

    angular.module('acc')
        .directive('jugList', jugList);

    function jugList() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'jug-list/jug-list.html',
            controller: 'JugListController',
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        }
    }
})();
