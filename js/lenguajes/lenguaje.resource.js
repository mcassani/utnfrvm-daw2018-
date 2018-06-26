(function () {
    'use strict';
    angular
        .module('MiApp')
        .service('LenguajeResource', LenguajeResource);

    function LenguajeResource($resource, URL_SERVIDOR) {
        return $resource(URL_SERVIDOR + 'lenguajes/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
})();