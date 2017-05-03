//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {

    };

  return {
    restrict: "AE",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME,
    scope: {
      news: '=',
    },
    template: require('./template.html')
  };
}];
