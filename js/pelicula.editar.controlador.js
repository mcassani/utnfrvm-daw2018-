(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('PeliculaEditarCtrl', PeliculaEditarCtrl);

    function PeliculaEditarCtrl($scope, $routeParams, $location, $uibModal, PeliculaResource, LenguajeResource) {

        $scope.lenguajes = LenguajeResource.query();

        if ($routeParams.id === 'nuevo') {
            $scope.titulo = 'Nueva Pelicula';
            $scope.pelicula = {};
        } else {
            $scope.titulo = 'Editar Pelicula';
            $scope.pelicula = PeliculaResource.get({
                id: $routeParams.id
            });
        }
        
        //Declaro variable para hacerla visible
        var ventanaCargando = {};
        var callbackExito = function (data) {
            ventanaCargando.close();
            $location.path("/");
        };

        var callbackError = function (error) {
            ventanaCargando.close();
            console.log(error.data.message);
        };

        $scope.aceptar = function () {
            if ($scope.pelicula.lenguaje && $scope.pelicula.lenguajeOriginal) {
                //Abro ventana de cargando
                ventanaCargando = $uibModal.open({
                    templateUrl: 'pages/dialogos/dialogo-cargando.html',
                    size: 'sm',
                    backdrop: 'static'
                });
                if ($routeParams.id === 'nuevo') {
                    PeliculaResource.save($scope.pelicula, callbackExito, callbackError);
                } else {
                    PeliculaResource.update($scope.pelicula, callbackExito, callbackError);
                }

            } else {
                alert("Complete los campos requeridos");
            }
        }

    }

})();