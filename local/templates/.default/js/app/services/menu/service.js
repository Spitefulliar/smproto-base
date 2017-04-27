/* Service for fetching structure of site and catalog
 */
export default class Service {
  constructor($http, $rootScope, $state) {
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
        console.warn(e.message, e);
        return;
      }
    }

    vm.fetchMenu();

    //menu
    vm.makeMenu = function(data) {
      if (!data || !data.menu) return;
      let menu = angular.copy(data.menu);

      if (!menu.catalog) {
        console.warn('No catalog info provided');
        return;
      }

      let {sref = 'catalog', srefParams = {}, delimeter = '/', departments = []} = menu.catalog;
      let parentSrefParams = srefParams;

      //making sref params, chldren extend parents srefParams
      menu.catalog.departments =  departments.map(function(department) {
        let { srefParams = {}, categories = []} = department;

        department.srefParams = Object.assign({}, parentSrefParams, srefParams, {delim1: delimeter});
        department.sref = sref;
        department.href = $state.href(sref, srefParams);

        department.categories = categories.map(function (category) {
          let { srefParams = {}, subcategories = []} = category;

          category.srefParams = Object.assign({}, department.srefParams, srefParams, {delim2: delimeter});
          category.sref = sref;
          category.href = $state.href(sref, srefParams);

          category.subcategories = subcategories.map(function (subcategory) {
            let { srefParams = {}, param, value, subcategories = []} = subcategory;

            subcategory.srefParams = Object.assign({}, category.srefParams, srefParams, {
                subcategory: param,
                subcategory_val: value
              });
            subcategory.sref = sref;
            subcategory.href = $state.href(sref, srefParams);

            return subcategory;
          });

          return category;
        });
        return department;
      });

      return menu;
    }

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



  get menu() {
    return this._menu;
  }


  // header menu
  makeHeaderMenu(data) {
    if (!data || !data.headerMenu) return;
    let menu = angular.copy(data.headerMenu);
    menu = Object.assign(menu, this.menu);
    return menu;
  }

  get headerMenu() {
    return this._headerMenu;
  }

  // footer menu
  makeFooterMenu(data) {
    if (!data || !data.footerMenu) return;
    let menu = angular.copy(data.footerMenu);
    menu = Object.assign(menu, this.menu);
    return menu;
  }

  get footerMenu() {
    return this._footerMenu;
  }

}

Service.$inject = ['$http', '$rootScope', '$state'];
