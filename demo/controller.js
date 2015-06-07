angular.module('demo.controllers', []).
    controller('EZPlusCtrl', function ($scope, $location) {
        /*$scope.$on('$routeChangeSuccess', function() {
         $scope.menuActive = $location.path().split("/")[1];
         });*/
        $scope.imagesForGallery = [
            {
                thumb: 'images/thumb/image1.jpg',
                small: 'images/small/image1.jpg',
                large: 'images/large/image1.jpg'
            },
            {
                thumb: 'images/thumb/image2.jpg',
                small: 'images/small/image2.jpg',
                large: 'images/large/image2.jpg'
            },
            {
                thumb: 'images/thumb/image3.jpg',
                small: 'images/small/image3.jpg',
                large: 'images/large/image3.jpg'
            },
            {
                thumb: 'images/thumb/image4.jpg',
                small: 'images/small/image4.jpg',
                large: 'images/large/image4.jpg'
            },
            {
                thumb: 'images/thumb/image5.jpg',
                small: 'images/small/image5.jpg',
                large: 'images/large/image5.jpg'
            }
        ];

        $scope.zoomOptions = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small'
        };

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

        $scope.zoomOptionsGallery04 = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small',

            gallery: 'gallery_04',
            cursor: 'pointer',
            galleryActiveClass: "active",
            imageCrossfade: true,
            loadingIcon: false
        };

        $scope.zoomModel1 = $scope.imagesForGallery[0];
        $scope.zoomModel2 = $scope.imagesForGallery[1];

        $scope.zoomModelGallery01 = $scope.imagesForGallery[1];
        $scope.zoomModelGallery04 = $scope.imagesForGallery[1];
        $scope.setActiveImageInGallery = function (prop, img) {
            $scope[prop] = img;
        };
    });


