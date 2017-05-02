import MODULE_CONFIG from './config';

//SERVICE
export default ['$http', '$rootScope',
  function($http, $rootScope) {
    let service = {};

    service.fetchPage = function(apiurl, qData = {}) {
      return $http({
        method: 'GET',
        url: apiurl + '?' + $.param(qData),
      }).then(function(response) {

          return response.data;

        }, function(response) {

          console.warn("can't get page data");
          return;
      });
    };

    service.loadPage = async function($scope, $stateParams) {
      const { pageData } = $rootScope;

      if (!pageData.PAGE_LOADER) return;

      let urlPostfix = (CONFIG.APP.API_POSTFIX && (pageData.PAGE_API_PARAM.indexOf(CONFIG.APP.API_POSTFIX) == -1))? CONFIG.APP.API_POSTFIX : '';
      try {
        let response = await service.fetchPage(CONFIG.APP.API_DIR + pageData.PAGE_API_PARAM + urlPostfix, $stateParams );
        if (!response || !response.page) throw new Error('No page provided in page data');
        $scope.page = response.page;
        $scope.pageData.title = $scope.page.title || $scope.pageData.title;
        $rootScope.$broadcast('pageDataLoaded');
      } catch (e) {
        console.error(e.message);
        return;
      }
    }

    return service;
}];
