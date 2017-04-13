export default ['$scope', '$rootScope', '$location', '$log', '$timeout', '$window', '$state', '$http',
  function($scope, $rootScope, $location, $log, $timeout, $window, $state, $http) {
    function getTmp() {
      let tmp = $http({
        method: 'GET',
        url: '/api/json/default.json',
      }).then(function(response) {
          return response;
        }, function(response) {
          console.warn("can't get page data");
          return;
      });
      return tmp;
    };
    let myAsyncRes;
    let myAsinc = async function() {
      myAsyncRes = await getTmp();
      console.log( myAsyncRes );
    };

    // let myAsinc = function() {
    //   console.log( getTmp() );
    // };

    myAsinc();
}];
