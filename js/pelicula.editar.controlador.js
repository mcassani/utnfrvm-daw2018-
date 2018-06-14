(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('PeliculaEditarCtrl', PeliculaEditarCtrl);

    function PeliculaEditarCtrl($scope, $routeParams, Pelicula) {

        if ($routeParams.id === 'nuevo') {
            $scope.titulo = 'Nueva Pelicula';
            $scope.pelicula = {};
        } else {
            $scope.titulo = 'Editar Pelicula';
            $scope.pelicula = Pelicula.getElemento($routeParams.id);
        }

        $scope.aceptar = function () {
            console.log($scope.pelicula);
            Pelicula.guardar($scope.pelicula);
        }

    }

})();