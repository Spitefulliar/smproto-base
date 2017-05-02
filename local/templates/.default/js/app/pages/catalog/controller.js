export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {

    // $rootScope.$on('$stateChangeSuccess',
    //   function(event, toState, toParams, fromState, fromParams){
    //     console.log(toState,toParams)
    //     let delimProp = '~2F';
    //     let delim = '/';
    //     if ($window.location.href.indexOf(delimProp) != -1) {
    //       // toState.go(toState.current.name, toState.params, { reload: false});
    //       console.log($window.location.href, $window.location.href.replace(delimProp, delim));
    //       $window.location.href = $window.location.href.replace(toParams.delim1, delim);
    //     }

    //   });

}];
