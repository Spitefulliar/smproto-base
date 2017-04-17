'use strict';

import MODULE_CONFIG from './config';
import Routing from './route';
import Controller from './controller';


export default angular
  .module(MODULE_CONFIG.MODULE_NAME, ['ui.router'])
  .config(Routing)
  .controller(MODULE_CONFIG.CONTROLLER_NAME, Controller);
