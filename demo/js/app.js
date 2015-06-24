angular.module('elevatezoomdemo', [
    'elevatezoomdemo.controllers',
    'ezplus',
    'fancyboxplus',
    'ui.router'
])

    .run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
)

    .config(function ($stateProvider, $urlRouterProvider) {
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

            $scope.zoomOptionsGallery01 = {
                scrollZoom: true,
                zoomWindowWidth: 600,
                zoomWindowHeight: 600,
                easing: true,
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 500,
                lensFadeIn: 500,
                lensFadeOut: 500,

                initial: 'small',

                gallery: 'gallery_01',
                cursor: 'pointer',
                galleryActiveClass: "active",
                imageCrossfade: true,
                loadingIcon: false
            };

            $scope.imagesForGallery = [];
            $scope.setApproot = function(appRoot) {
                //only change when needed.
                if ($scope.approot && appRoot === $scope.approot) {
                    return;
                }
                $scope.approot = appRoot;
                $scope.imagesForGallery = [
                    {
                        thumb: appRoot + 'images/thumb/image1.jpg',
                        small: appRoot + 'images/small/image1.jpg',
                        large: appRoot + 'images/large/image1.jpg'
                    },
                    {
                        thumb: appRoot + 'images/thumb/image2.jpg',
                        small: appRoot + 'images/small/image2.jpg',
                        large: appRoot + 'images/large/image2.jpg'
                    },
                    {
                        thumb: appRoot + 'images/thumb/image3.jpg',
                        small: appRoot + 'images/small/image3.jpg',
                        large: appRoot + 'images/large/image3.jpg'
                    },
                    {
                        thumb: appRoot + 'images/thumb/image4.jpg',
                        small: appRoot + 'images/small/image4.jpg',
                        large: appRoot + 'images/large/image4.jpg'
                    },
                    {
                        thumb: appRoot + 'images/thumb/image5.jpg',
                        small: appRoot + 'images/small/image5.jpg',
                        large: appRoot + 'images/large/image5.jpg'
                    }
                ];

                $scope.zoomModel1 = $scope.imagesForGallery[0];
                $scope.zoomModel2 = $scope.imagesForGallery[1];

                $scope.zoomModelGallery01 = $scope.imagesForGallery[1];
                $scope.zoomModelGallery04 = $scope.imagesForGallery[1];
            };

            //default
            $scope.setApproot('');
        }
    });
