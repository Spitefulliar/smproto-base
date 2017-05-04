//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
        $scope.slickConfigSlider = {
          enabled: true,
          autoplay: true,
          autoplaySpeed: 5000,
          draggable: true,
          adaptiveHeight: false,
          infinite: true,
          cssEase: false,
          useCSS: false,
          dots: true,
          dotsClass: 'slick-dots slick-numbers',
          arrows: true,
          mobileFirst: true,
          swipe: true,
          easing: 'linear',
          swipeToSlide: true,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: true,
          centerPadding: '0px',
        };
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME,
    scope: {
      slides: '='
    },
    template: require('./template.html')
  };
}];
