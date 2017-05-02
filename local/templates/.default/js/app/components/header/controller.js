//CONTROLLER
import MODULE_CONFIG from './config';

export default class HeaderController {
  constructor ($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $http, $mdMenu, artServiceMenuService) {
    $scope[MODULE_CONFIG.SERVICE_NAME] = $moduleService;
    $scope.menuService = artServiceMenuService;

    $scope.headerMenu = $scope.menuService.headerMenu;

    $scope.openMenu = function($mdMenu, ev) {
      let menuTO = $timeout(function(){
        $mdMenu.open(ev);
      },400);

      $(ev.target).on('mouseleave', function() {
        $timeout.cancel(menuTO);
      });
    };

    $scope.closeMenu = function($mdMenu, ev) {
      $timeout(function(){
        $mdMenu.close(true);
      },0);
    };


    function toggleHederPinState (event) {
      $scope.headerIsPinned = (event.type == 'enter');
      $scope.searchBarIsOpen = $scope.headerIsPinned;
      return;
    }
    //header pin animation
    function initHeaderPinAnimation() {

      let smCtrl = new ScrollMagic.Controller();
      let headerPinSMScene = new ScrollMagic.Scene({triggerElement: "main", triggerHook: 0, duration: 0})
              // .setTween(tlHeaderPin)
              .setClassToggle('[data-header-pinned]', "pinned")
              .addTo(smCtrl);
      // add listeners
      headerPinSMScene.on("enter leave", toggleHederPinState);

    };

    $rootScope.$on('$menuLoaded', function(event) {
      $scope.headerMenu = $scope.menuService.headerMenu;
      //applying header pin animation
      initHeaderPinAnimation();
    });

  // $rootScope.$on('$routeChangeSuccess', function(event, current) {
  //   $scope.currentNavItem = getCurrentLinkFromRoute(current);
  // });
  }

}

HeaderController.$inject = ['$scope', '$rootScope', MODULE_CONFIG.SERVICE_NAME, '$log', '$timeout', '$window', '$state', '$http', '$mdMenu', 'artServiceMenuService'];
