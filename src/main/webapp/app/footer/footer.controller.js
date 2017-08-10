(function() {
    'use strict';

    angular
        .module('zonesionCloudApplicationApp')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function FooterController ($scope, Principal, LoginService, $state) {
    }
})();
