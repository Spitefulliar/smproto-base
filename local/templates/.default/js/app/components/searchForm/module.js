'use strict';
import Controller from './controller';
import Directive from './directive';
import Service from './service';
import MODULE_CONFIG from './config';


export default angular
  .module(MODULE_CONFIG.MODULE_NAME, ['ui.router'])
  .controller(MODULE_CONFIG.CONTROLLER_NAME, Controller)
  .directive(MODULE_CONFIG.DIRECTIVE_NAME, Directive)
  .service(MODULE_CONFIG.SERVICE_NAME, Service);
