(function() {
    'use strict';

    angular
        .module('zonesionCloudApplicationApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('hour', {
            parent: 'account',
            url: '/hour',
            data: {
                authorities: [],
                pageTitle: 'hour.title'
            },
            views: {
                'content@': {
                    controller: 'HourController',
                    controllerAs: 'vm',
                    templateUrl: 'app/hour/hour.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('hour');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
