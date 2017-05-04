//CONTROLLER
import MODULE_CONFIG from './config';

export default ['$scope', '$rootScope', MODULE_CONFIG.SERVICE_NAME, '$log', '$timeout', '$window', '$state', '$mdPanel',
  function($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $mdPanel) {

  $scope[MODULE_CONFIG.SERVICE_NAME] = $moduleService;

  let ctrl = this;
  $scope._mdPanel = $mdPanel;

  $scope.showSubsPopup = function(isDisabled) {
    var panelRef, position, backdrop, animName, zindex, animation, attachment;
    if (isDisabled) {
      return false;
    } else {
      position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();
      attachment = angular.element(document.body);
      backdrop = true;
      zindex = 9999999;
      animation = this._mdPanel.newPanelAnimation().openFrom({
        left: "50%",
        bottom: 0
      })
      .withAnimation(this._mdPanel.animation.SCALE);
    }
    var config = {
      attachTo: attachment,
      template: require('./template.html'),
      panelClass: 'mailing-subs-popup',
      position: position,
      animation: animation,
      groupName: 'mailing-subs-popup',
      maxOpen: 1,
      hasBackdrop: backdrop,
      scope: $scope,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true,
      zIndex: zindex,
      disableParentScroll: true,
    };

    panelRef = $scope._mdPanel.create(config);
    panelRef.open();

    $scope.close = this.closePanel = function() {
      panelRef.close();
    }

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      $scope.close();
    });

    return true;
  }
}];
