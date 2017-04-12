//DIRECTIVE
import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default ['$rootScope','$http', '$timeout', '$window', '$state', '$log', '$stateParams', '$compile',
  function ($rootScope, $http, $timeout, $window, $state, $log, $stateParams, $compile) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      // taking a page constructor tpl to build a page, if it's a directive element
      var linkFn = (typeof $attributes.artPageloaderDir == 'string')? false : $compile(require('./template.html'));
      if (linkFn) {
        linkFn($scope,function cloneAttachFn(clone, scope) {
          $element.replaceWith(clone);
        });
      }

      let urlPostfix = (CONFIG.APP.API_POSTFIX && ($rootScope.pageData.apiParam.indexOf(CONFIG.APP.API_POSTFIX) == -1))? CONFIG.APP.API_POSTFIX : '';

      try {
        $scope.getPage(CONFIG.APP.API_DIR + $rootScope.pageData.apiParam + urlPostfix, $stateParams.pageCode).then(function(response){
          if (!response || !response.page) throw new Error('No page provided in page data');
          $scope.page = response.page;
          $scope.pageData.title = $scope.page.title || $scope.pageData.title;
          $rootScope.$broadcast('pageDataLoaded');
          $attributes = $attributes;
        });
      } catch (e) {
        console.warn(e.message);
        return;
      }

    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX,
    // template: require('./template.html'),
    template: false,
    replace: false,
    scope: false
  };
}];
