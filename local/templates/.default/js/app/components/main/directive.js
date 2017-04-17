//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  // '$mdMedia',
  function ($rootScope, $http, $timeout, $window, $state) {
  // $mdMedia,
    var linkFunction = function linkFunction($scope, $element, $attributes) {
    };
  return {
    restrict: "A",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME
  };
}];
