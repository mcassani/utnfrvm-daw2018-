(function () {
    'use strict';
    angular
        .module('MiApp')
        .controller('MiCtrl', MiCtrl);

    function MiCtrl($scope, $location, PeliculaResource) {

        $scope.consultarPelicula = function consultarPelicula(id) {
            $location.path('/agregar/' + id);
        };

        PeliculaResource.get({
            page: 0,
            size: 25,
            sort : 'id,desc'
        }, function (rta) {
            $scope.peliculas = rta.content;
        });
    }

})();