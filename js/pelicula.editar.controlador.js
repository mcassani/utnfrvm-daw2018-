(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('PeliculaEditarCtrl', PeliculaEditarCtrl);

    function PeliculaEditarCtrl($scope, $routeParams, PeliculaResource) {


        if ($routeParams.id === 'nuevo') {
            $scope.titulo = 'Nueva Pelicula';
            $scope.pelicula = {};
        } else {
            $scope.titulo = 'Editar Pelicula';
            $scope.pelicula = PeliculaResource.get({
                id: $routeParams.id
            });
        }

        $scope.aceptar = function () {
            console.log($scope.pelicula);
            if ($routeParams.id === 'nuevo') {
                $scope.pelicula.lenguajeOriginal = {
                    id: 6
                };
                $scope.pelicula.lenguaje = {
                    id: 6
                };
                PeliculaResource.save($scope.pelicula);
            } else {
                PeliculaResource.update($scope.pelicula);
            }

        }

    }

})();