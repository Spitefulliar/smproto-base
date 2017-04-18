export class structureService {
  constructor() {

    this.getStructure = async function () {
      if (this.structure) {
        return this.structure;
      } else {
        return await this.fetchStructure();
      }
    }

    this.fetchStructure = async function () {
      try {
        let response = await this.fetch(CONFIG.APP.API_DIR + CONFIG.APP.API.STRUCTURE).then(function (response) {
          if (!response) throw new Error("Can't get structure");
          return response;
        });
      } catch (e) {
        console.error(e.message);
        return;
      }
    }

    this.structure = fetchStructure();
    this.menu = makeheaderMenu(this.getStructure());
    this.headerMenu = makeheaderMenu(this.getStructure());
    this.footerMenu = makefooterMenu(this.getStructure());
  }

  // fetch resources. apiurl: "" (url), qData: {} (params)
  fetch(apiurl = "", qData = {}) {
    return $http({
      method: 'GET',
      url: apiurl + '?' + $.param(qData),
    }).then(function (response) {

      return response.data;

    });
  };



  //menu
  makeMenu(structure) {
    if (!structure) return;
    console.debug('structure', structure);
    let menu = {};
    return menu;
  }

  getMenu() {
    return this.headerMenu;
  }


  // header menu
  makeHeaderMenu(structure) {
    if (!structure) return;
    let menu = {};
    return menu;
  }

  getHeaderMenu() {
    return this.headerMenu;
  }


  // footer menu
  makeFooterMenu(structure) {
    if (!structure) return;
    let menu = {};
    return menu;
  }

  getFooterMenu() {
    return this.headerMenu;
  }



  // menu = {
  //   "items": [{
  //       "title": "surf",
  //       "state": "catalog/surf",
  //       "link": "/catalog/surf/",
  //       "supercategory": "surf",
  //       "index": 0
  //     },
  //     {
  //       "title": "skate",
  //       "state": "catalog/skate",
  //       "link": "/catalog/skate/",
  //       "supercategory": "skate",
  //       "index": 1
  //     },
  //     {
  //       "title": "snow",
  //       "state": "catalog/snow",
  //       "link": "/catalog/snow/",
  //       "supercategory": "snow",
  //       "index": 2
  //     },
  //     {
  //       "title": "мужчинам",
  //       "state": "catalog/men",
  //       "link": "/catalog/men/",
  //       "supercategory": "men",
  //       "index": 3
  //     },
  //     {
  //       "title": "женщинам",
  //       "state": "catalog/women",
  //       "link": "/catalog/women/",
  //       "supercategory": "women",
  //       "index": 4
  //     },
  //     {
  //       "title": "детям",
  //       "state": "catalog/children",
  //       "link": "/catalog/children/",
  //       "supercategory": "children",
  //       "index": 5
  //     }
  //   ]
  // }

  // footerMenu = {
  //   "service": {
  //     "items": [{
  //         "title": "Где купить",
  //         "state": false,
  //         "link": "http://www.sportmaster.ru/store/?_ga=1.18261305.168630824.1464709326",
  //         "index": 0,
  //         "external": true
  //       },
  //       {
  //         "title": "О бренде",
  //         "state": "about/",
  //         "link": "/about/",
  //         "index": 1,
  //         "external": false
  //       },
  //       {
  //         "title": "Технологии",
  //         "state": "tech/",
  //         "link": "/tech/",
  //         "index": 2,
  //         "external": false
  //       }
  //     ]
  //   }
  // }
}

structureService.$inject = ['$http', '$rootScope'];
