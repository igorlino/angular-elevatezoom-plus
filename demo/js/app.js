angular.module('elevatezoomdemo', [
    'elevatezoomdemo.controllers',
    'ezplus',
    'fancyboxplus',
    'ui.router'
])

    .run(
    [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
)

    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/main");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "main.html",
                controller: DemoCtrl
            })
            .state('api', {
                url: "/api",
                templateUrl: "api.html",
                controller: CueCtrl
            })
            .state('examples', {
                url: "/examples",
                templateUrl: "examples.html",
                controller: CueCtrl
            });

        function CueCtrl($timeout) {
            $timeout(function () {
                Cufon.replace('h1', {color: '#ff6347'});
            }, 0);
        }

        function BlogCtrl($timeout, $scope, fancyboxService) {
            CueCtrl($timeout);
        }

        function DemoCtrl($timeout, $scope, fancyboxService) {
            CueCtrl($timeout);
        }
    });
