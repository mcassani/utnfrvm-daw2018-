(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('MiCtrl', MiCtrl);

    function MiCtrl($scope, $location, PeliculaResource) {

        $scope.consultarPelicula = function consultarPelicula(id) {
            $location.path('/agregar/' + id);
        };

        PeliculaResource.query(function (rta) {
            $scope.peliculas = rta;
        });
    }

})();