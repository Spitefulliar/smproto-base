//CONTROLLER
import MODULE_CONFIG from './config';

export default ['$scope', '$rootScope', MODULE_CONFIG.SERVICE_NAME, '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $http) {

  $scope[MODULE_CONFIG.SERVICE_NAME] = $moduleService;

  $scope.links = $moduleService.links;
  $scope.citySelect = $moduleService.citySelect;
  $scope.languageSelect = $moduleService.languageSelect;
  $scope.language = $scope.languageSelect.options[0].value;


}];
