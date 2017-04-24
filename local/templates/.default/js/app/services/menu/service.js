/* Service for fetching structure of site and catalog
 */
export default class Service {
  constructor($http, $rootScope) {
    let vm = this;

    // fetch resources. apiurl: "" (url), qData: {} (params)
    vm.fetch = function (apiurl = "", qData = {}) {
      return $http({
        method: 'GET',
        url: apiurl + '?' + $.param(qData),
      }).then(function (response) {

        return response.data;

      });
    };

    //getting menu from server
    vm.fetchMenu = async function () {
      if (vm.menuIsLoading) return;
      vm.menuIsLoading = true;
      try {
        let data = vm.fetch(CONFIG.APP.API_DIR + CONFIG.APP.API.MENU).then(function (response) {
          if (!response) throw new Error("Can't get structure");
          vm.menuIsLoading = false;
          return response;
        });


        vm._menuStructure = vm.makeMenuStructure(await data);
        vm._menu = vm.makeMenu(await data);
        vm._headerMenu = vm.makeHeaderMenu(await data);
        vm._footerMenu = vm.makeFooterMenu(await data);
        $rootScope.$emit("$menuLoaded", await data);

        return await data;

      } catch (e) {
        console.error(e.message);
        return;
      }
    }

    vm.fetchMenu();
  }

  //structure
  makeMenuStructure(data) {
    if (!data) return;
    let menu = angular.copy(data);
    return menu;
  }

  get structure() {
    return this._menuStructure;
  }

  //menu
  makeMenu(data) {
    if (!data || !data.menu) return;
    let menu = angular.copy(data.menu);
    return menu;
  }

  get menu() {
    return this._headerMenu;
  }


  // header menu
  makeHeaderMenu(data) {
    if (!data || !data.headerMenu) return;
    let menu = angular.copy(data.headerMenu);
    return menu;
  }

  get headerMenu() {
    return this._headerMenu;
  }

  // footer menu
  makeFooterMenu(data) {
    if (!data || !data.footerMenu) return;
    let menu = angular.copy(data.footerMenu);
    return menu;
  }

  get footerMenu() {
    return this._footerMenu;
  }

}

Service.$inject = ['$http', '$rootScope'];
