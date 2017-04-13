import MODULE_CONFIG from './config';
const MODULE_NAME =  MODULE_CONFIG.NAME;

//SERVICE
export default ['$http', '$rootScope',
  function($http, $rootScope,) {
    let service = {};

    service.getPage = function(apiurl, code) {
      let qData = {
        code: code
      };
      return $http({
        method: 'GET',
        url: apiurl + '?' + $.param(qData),
      }).then(function(response) {
          //if there are typycal page sections, transform  them
          // if (response.data.page && response.data.page.sections) {
          //   response.data.page.sections = service.sectionsCommonTranform(response.data.page.sections);
          // }
          return response.data;
        }, function(response) {
          console.warn("can't get page data");
          return;
      });
    };

    service.loadPage = async function($scope) {
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
    }

    return service;
}];
