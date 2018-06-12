(function () {
    'use strict';

    angular
        .module('MiApp')
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                    controller: 'MiCtrl',
                    templateUrl: 'pages/lista.html'
                })
                .when('/agregar/:id', {
                    controller: 'PeliculaEditarCtrl',
                    templateUrl: 'pages/agregar.html'
                });
        });
})();