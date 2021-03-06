(function () {
    'use strict';

    angular.module('acc')
        .controller('TickDeskController', TickDeskController);

    function TickDeskController($state, tickDeskService) {
        const ctrl = this;

        const tickDeskDataQ = tickDeskService.getTickDeskData();

        angular.extend(ctrl, {
            tickDeskData: [],

            addTick: addTick
        });

        ctrl.$onInit = function () {
            tickDeskDataQ.then((tickDeskData) => {
                ctrl.tickDeskData = tickDeskData;
                console.log('ctrl.tickDeskData', ctrl.tickDeskData);
            });
        };

        function addTick() {
            $state.go('tick-new');
        }
    }
})();