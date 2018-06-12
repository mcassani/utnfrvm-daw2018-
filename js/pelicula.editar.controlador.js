(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('PeliculaEditarCtrl', PeliculaEditarCtrl);

    function PeliculaEditarCtrl($scope, $routeParams, Pelicula) {

        $scope.pelicula = {};
        console.log($routeParams.id);

        $scope.aceptar = function () {
            console.log($scope.pelicula);
            Pelicula.guardar($scope.pelicula);
        }

    }

})();