(function () {
    'use strict';

    angular
        .module('MiApp', [])
        .controller('MiCtrl', MiCtrl);


    function MiCtrl($scope) {
        $scope.prueba = function () {
            alert("Saludos desde ng-click " + $scope.valor);
        }

        $scope.limpiarBuscador = function () {
            $scope.buscador = "";
        }

        var prueba = {};

        $scope.habitaciones = [100,101,200,206];

        $scope.agregarHabitacion = agregarHabitacion;

        function agregarHabitacion() {
            $scope.habitaciones.push($scope.buscador);
        }

    }

})();