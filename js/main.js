(function () {
    'use strict';

    angular
        .module('MiApp', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                controller: 'MiCtrl',
                templateUrl: 'pages/lista.html'
            })
            .when('/agregar', {
                controller : 'MiCtrl',
                templateUrl: 'pages/agregar.html'
            });
        })
        .controller('MiCtrl', MiCtrl);


    function MiCtrl($scope, Pelicula) {

        $scope.consultarPelicula = function consultarPelicula(id, segundo) {
            alert(segundo);
        };
        console.log(Pelicula);
        $scope.peliculas = Pelicula.get();
    }

})();