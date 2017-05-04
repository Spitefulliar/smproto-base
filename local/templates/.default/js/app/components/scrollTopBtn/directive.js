//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {

      $scope.scrollTop = function() {
        let body = $("html, body");
        body.stop().animate({scrollTop:0}, '500', 'swing');
      }

      //btn pin animation
      function initBtnPinAnimation() {

        let smCtrl = new ScrollMagic.Controller();
        let btnPinFooterSMScene = new ScrollMagic.Scene({triggerElement: ".footer", triggerHook: "onEnter", duration: 0})
                .setClassToggle('[data-scroll-top-btn]', "ng-hide")
                .addTo(smCtrl);
      };

      initBtnPinAnimation();

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME,
    template: require('./template.html')
  };
}];
