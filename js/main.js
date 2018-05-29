(function () {
    'use strict';

    angular
        .module('MiApp', [])
        .controller('MiCtrl', MiCtrl);


    function MiCtrl($scope) {
        $scope.prueba = function () {
            alert("Saludos desde ng-click " + $scope.valor);
        }
    }

})();