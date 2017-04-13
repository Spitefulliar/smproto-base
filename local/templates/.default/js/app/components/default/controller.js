//CONTROLLER
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$scope', '$rootScope', CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX, '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $http) {

  $scope[CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.SERVICE_POSTFIX] = $moduleService;

}];