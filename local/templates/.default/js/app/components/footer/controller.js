//CONTROLLER
import MODULE_CONFIG from './config';

export default class footerController {
  constructor ($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $http, $mdMenu, artServiceMenuService) {
    $scope[MODULE_CONFIG.SERVICE_NAME] = $moduleService;
    $scope.menuService = artServiceMenuService;

    $scope.footerMenu = $scope.menuService.footerMenu;

    $rootScope.$on('$menuLoaded', function(event) {
      $scope.footerMenu = $scope.menuService.footerMenu;
      console.debug($scope.footerMenu);
    });
  }

}

footerController.$inject = ['$scope', '$rootScope', MODULE_CONFIG.SERVICE_NAME, '$log', '$timeout', '$window', '$state', '$http', '$mdMenu', 'artServiceMenuService'];
