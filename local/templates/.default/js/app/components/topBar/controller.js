//CONTROLLER
import MODULE_CONFIG from './config';

export default ['$scope', '$rootScope', MODULE_CONFIG.SERVICE_NAME, '$log', '$timeout', '$window', '$state', '$http', '$cookies',
  function($scope, $rootScope, $moduleService, $log, $timeout, $window, $state, $http, $cookies) {

  $scope[MODULE_CONFIG.SERVICE_NAME] = $moduleService;

  $scope.links = $moduleService.links;
  $scope.citySelect = $moduleService.citySelect;
  $scope.languageSelect = $moduleService.languageSelect;

  //language select logic
  const langCookieKey = 'NG_TRANSLATE_LANG_KEY';
  let langCookieVal;

  //setting value on load
  $scope.setLanguageFromCookie = function () {
    $scope.language = langCookieVal = $cookies.get(langCookieKey);
  }

  $timeout(function(){
    $scope.setLanguageFromCookie();
  },0);

  $scope.setLanguageCookie = function(value = 'ru') {
    if (langCookieVal == value) return;
    $scope.language = $cookies.put(langCookieKey,value);
    $window.location.reload();
  }

}];
