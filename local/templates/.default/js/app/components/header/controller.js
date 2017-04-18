//CONTROLLER
import MODULE_CONFIG from './config';

export default ['$scope', '$rootScope', MODULE_CONFIG.SERVICE_NAME, '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $http) {

  $scope[MODULE_CONFIG.SERVICE_NAME] = $moduleService;

  $rootScope.$on('$routeChangeSuccess', function(event, current) {
     $scope.currentNavItem = getCurrentLinkFromRoute(current);
  });

}];
