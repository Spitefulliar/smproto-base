export class Config {
  constructor(options = {
      TYPE: false,
      NAME : false,
      PAGE_NAME : false,
      PAGE_STATE : false,
      PAGE_URL : false,
      PAGE_TITLE : false,
      PAGE_LOADER : false,
      PAGE_API_PARAM : false,
      PAGE_LOADER_PARAM: false,
      MODULE_NAME : false,
      CONTROLLER_NAME : false,
      DIRECTIVE_NAME : false,
      SERVICE_NAME : false,
    }, ...args) {

    let vm = this;
    let {
      TYPE = 'component',
      NAME = false,
      PAGE_NAME = false,
      PAGE_STATE = false,
      PAGE_URL = false,
      PAGE_TITLE = false,
      PAGE_LOADER = true,
      PAGE_API_PARAM = false,
      PAGE_LOADER_PARAM = 'code',
      MODULE_NAME = false,
      CONTROLLER_NAME = false,
      DIRECTIVE_NAME = false,
      SERVICE_NAME = false,
    } = options;


    if (!NAME.length) throw new Error('No name provided in module Config');

    NAME = vm.capitalizeName(NAME);

    let newConfig = {
      NAME: NAME
    };

    if (TYPE == 'page') {
      PAGE_NAME = PAGE_NAME || NAME;
      PAGE_TITLE = PAGE_TITLE || PAGE_NAME;
      PAGE_STATE = PAGE_STATE || NAME.toLowerCase();
      PAGE_LOADER_PARAM = (PAGE_LOADER)? PAGE_LOADER_PARAM : false;
      PAGE_URL = vm.buildPageUrl(PAGE_URL,PAGE_STATE,PAGE_LOADER_PARAM);

      Object.assign(newConfig, {
        // module config
        MODULE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX,
        CONTROLLER_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX,
        DIRECTIVE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.DIRECTIVE_POSTFIX,
        SERVICE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.SERVICE_POSTFIX,
        //page config
        PAGE_NAME: PAGE_NAME,
        PAGE_TITLE: PAGE_TITLE,
        PAGE_STATE: PAGE_STATE,
        PAGE_URL: PAGE_URL,
        PAGE_TITLE: PAGE_TITLE,
        PAGE_API_PARAM: PAGE_API_PARAM || PAGE_STATE,
        PAGE_LOADER: PAGE_LOADER,
        PAGE_LOADER_PARAM: PAGE_LOADER_PARAM,
      });

    } else {

      Object.assign(newConfig, {
        // module config
        MODULE_NAME: CONFIG.APP.PREFIX + NAME,
        CONTROLLER_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.CONTROLLER_POSTFIX,
        DIRECTIVE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.DIRECTIVE_POSTFIX,
        SERVICE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.SERVICE_POSTFIX,
      });

    }

    if (args && args.length) {
      Object.assign(newConfig, ...args);
    }

    return newConfig;
  }

  capitalizeName(str = '') {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }

  buildPageUrl(url = false, state = false, pageLoaderParam) {
    if (pageLoaderParam) pageLoaderParam = (angular.isArray(pageLoaderParam))? '{' + pageLoaderParam.join('}/{') + '}/' : `:${pageLoaderParam}`;
    return `${(url)? url : `/${state}/`}${(pageLoaderParam)? pageLoaderParam: '' }`
  }
};
