(function () {
    'use strict';

    angular
        .module('zonesionCloudApplicationApp')
        .factory('Hour', Hour);

    Hour.$inject = ['$resource'];

    function Hour ($resource) {
        return $resource('api/Hour', {}, {});
    }
})();
