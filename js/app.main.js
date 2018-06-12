(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('MiCtrl', MiCtrl);

    function MiCtrl($scope, Pelicula) {

        $scope.consultarPelicula = function consultarPelicula(id) {
            alert();
        };
        console.log(Pelicula);
        $scope.peliculas = Pelicula.get();
    }

})();