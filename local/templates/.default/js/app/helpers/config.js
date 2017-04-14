export class Config {
  constructor(options = {
      NAME : '',
      PAGE_NAME : false,
      PAGE_STATE : false,
      PAGE_URL : false,
      PAGE_TITLE : false,
      PAGE_API_PARAM : false,
      PAGE_LOADER_PARAM: false,
      MODULE_NAME : false,
      CONTROLLER_NAME : false,
      DIRECTIVE_NAME : false,
      SERVICE_NAME : false,
    }, type = 'component', ...args) {

    let vm = this;
    let {
      NAME = false,
      PAGE_NAME = false,
      PAGE_STATE = false,
      PAGE_URL = false,
      PAGE_TITLE = false,
      PAGE_API_PARAM = false,
      PAGE_LOADER_PARAM = 'code',
      MODULE_NAME = false,
      CONTROLLER_NAME = false,
      DIRECTIVE_NAME = false,
      SERVICE_NAME = false,
    } = options;


    if (!NAME.length) throw new Error('No name provided in module Config');

    NAME = vm.capitalizeName(NAME);
    PAGE_STATE = PAGE_STATE || NAME.toLowerCase();
    PAGE_URL = vm.buildPageUrl(PAGE_URL,PAGE_STATE,PAGE_LOADER_PARAM);

    return {
      // module config
      PAGE_NAME: NAME,
      MODULE_NAME: CONFIG.APP.PREFIX + NAME + ( (type == 'page')? CONFIG.APP.PAGE_POSTFIX : '' ),
      CONTROLLER_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX,
      DIRECTIVE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.DIRECTIVE_POSTFIX,
      SERVICE_NAME: CONFIG.APP.PREFIX + NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.SERVICE_POSTFIX,
      //page config
      PAGE_TITLE: PAGE_TITLE,
      PAGE_NAME: PAGE_NAME || NAME,
      PAGE_STATE: PAGE_STATE,
      PAGE_URL: PAGE_URL,
      PAGE_TITLE: PAGE_TITLE,
      PAGE_API_PARAM: PAGE_API_PARAM || PAGE_STATE,
      PAGE_LOADER_PARAM: (type == 'page')? PAGE_LOADER_PARAM : false,
    };
  }

  capitalizeName(str = '') {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }

  buildPageUrl(url = false, state = false, pageParam) {
    pageParam = (angular.isArray(pageParam))? '{' + pageParam.join('}/{') + '}/' : `:${pageParam}`;
    return `${(url)? url : `/${state}/`}${(pageParam)? pageParam: '' }`
  }
};
