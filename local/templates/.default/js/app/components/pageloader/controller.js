//CONTROLLER
import MODULE_CONFIG from './config';

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.SERVICE_POSTFIX, '$location', '$log', '$timeout', '$window', '$state', '$sce', '$http',
  function($scope, $rootScope, $moduleService, $location, $log, $timeout, $window, $state, $sce, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

  $scope.loadPage = $moduleService.loadPage;

}];
