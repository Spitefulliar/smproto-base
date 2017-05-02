//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
      $scope.noCache = false;
      $scope.simulateQuery = false;
      $scope.isDisabled    = false;

      // list of `result` value/display objects
      $scope.results        = fetchResults();
      $scope.querySearch   = querySearch;

      $scope.toggleSearchForm = function() {
        $scope.manuallyOpen = !$scope.manuallyOpen;
        return;
      }

      $scope.searchFormIsOpen = () => $scope.forceOpen || $scope.manuallyOpen;



      // fetching initial results
      function fetchResults() {
        var allResults = 'good, product, шапка, брюки, футболка, носки, снаряжение';

        return allResults.split(/, +/g).map( function (item) {
          return {
            value: item.toLowerCase(),
            display: item
          };
        });
      };

      /**
       * Search for states... use $timeout to simulate
       * remote dataservice call.
       */
      function querySearch (query) {
        var results = query ? $scope.results.filter( createFilterFor(query) ) : $scope.results,
            deferred;
        if ($scope.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }

      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
        let lowercaseQuery = angular.lowercase(query);

        return function filterFn(item) {
          return (item.value.indexOf(lowercaseQuery) === 0);
        };

      }
    };
  return {
    restrict: "AE",
    link: linkFunction,
    scope: {
      forceOpen: '='
    },
    controller: MODULE_CONFIG.CONTROLLER_NAME,
    template: require('./template.html')
  };
}];
