//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$stateParams', '$compile', CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.SERVICE_POSTFIX,
  function ($rootScope, $http, $timeout, $window, $state, $log, $stateParams, $compile, $moduleService) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      // taking a page constructor tpl to build a page, if it's a directive element
      var linkFn = (typeof $attributes.artPageloaderDir == 'string')? false : $compile(require('./template.html'));
      if (linkFn) {
        linkFn($scope,function cloneAttachFn(clone, scope) {
          $element.replaceWith(clone);
        });
      }

      $scope.loadPage($scope, $stateParams);

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME,
    // template: require('./template.html'),
    template: false,
    replace: false,
    scope: false
  };
}];
