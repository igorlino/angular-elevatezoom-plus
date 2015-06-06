(function () {
    'use strict';

    angular.module('ezplus')
        .directive('ezPlus', ezPlus);

    function ezPlus() {
        var service = {
            restrict: 'A',
            scope: {
                ezpModel: '=',
                ezpOptions: '='
            },
            link: link
        };
        return service;

        ////////////////////////////


		link.$inject = ['$scope', '$element'];
        function link($scope, $element, $attributes) {
            $scope.$watch('ezpModel', function (newValue, oldValue) {
                var image = newValue;
                var thumbMediumUrl = (image && image.thumb) || '';
                var fullSizeUrl = (image && image.large) || '';

                var plugin = angular.element($element).data('ezPlus');
                if (plugin) {
                    var loader = 'images/loader-small.gif';
                    plugin.swaptheimage(loader, loader);
                    plugin.swaptheimage(thumbMediumUrl, fullSizeUrl);
                } else if (image) {
                    $element.attr('src', thumbMediumUrl);
                    $element.attr('data-zoom-image', fullSizeUrl);

                    var options = {
                        /*scrollZoom: true,
                        zoomWindowWidth: 600,
                        zoomWindowHeight: 600,
                        easing : true,
                        zoomWindowFadeIn: 500,
                        zoomWindowFadeOut: 500,
                        lensFadeIn: 500,
                        lensFadeOut: 500*/
                    };

                    //generic way that sets all (non-function) parameters of colorbox.
                    if ($scope.ezpOptions) {
                        //var cbOptionsFunc = $parse($attributes.options);
                        //var cbOptions = cbOptionsFunc($scope);
                        angular.extend(options, $scope.ezpOptions);
                    }
                    angular.element($element).ezPlus(options);
                }
            });

            $scope.$on('$destroy', function () {
                $element.remove();
            });
        }
    }

})
();
