(function () {
    'use strict';
    angular
        .module('MiApp')
        .service('PeliculaResource', PeliculaResource);

    function PeliculaResource($resource) {
        var pelicula = $resource('http://localhost:8080/peliculas/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
        return pelicula;
    }
})();