//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {

      /**
       * function for assigning cell sizes to array of banners
       *
       * @param {array} [banners=[]]
       * @param {number} [baseCellHeight=1]
       * @returns {array} banners
       */
      function makeGridPattern(banners = [], baseCellHeight = 1) {

        let sizes = [ [2,1], [1,2], [2,1], [1,2] ];

        while(sizes.length < banners.length) {
          sizes.concat(sizes);
        }

        banners.map(function(item, i) {
          return Object.assign(item, {
            "rowspan": sizes[i][0] * baseCellHeight,
            "colspan": sizes[i][1]
          });
        });

        return banners;
      }

      $scope.banners = makeGridPattern($scope.banners, $scope.baseCellHeight);
    };

  return {
    restrict: "AE",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME,
    scope: {
      banners: '=',
      baseCellHeight: '@',
      blockType: '@'
    },
    template: require('./template.html')
  };
}];
