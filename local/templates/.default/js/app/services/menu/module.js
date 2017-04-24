'use strict';
import Service from './service';
import MODULE_CONFIG from './config';

export default angular
  .module(MODULE_CONFIG.MODULE_NAME, [])
  .service(MODULE_CONFIG.SERVICE_NAME, Service);
