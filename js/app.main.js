(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('MiCtrl', MiCtrl);

    function MiCtrl($scope, $location, Pelicula) {

        $scope.consultarPelicula = function consultarPelicula(id) {
            $location.path('/agregar/' + id);
        };

        Pelicula.get().then(function (rta) {
            $scope.peliculas = rta.data;
        })
    }

})();