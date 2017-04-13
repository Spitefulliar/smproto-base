'use strict';
import Controller from './controller';
import Directive from './directive';
import Service from './service';

import MODULE_CONFIG from './config';

export default angular
  .module(CONFIG.APP.PREFIX + MODULE_CONFIG.NAME, [])
  .controller(CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.CONTROLLER_POSTFIX, Controller)
  .directive(CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.DIRECTIVE_POSTFIX, Directive)
  .service(CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.SERVICE_POSTFIX, Service);
