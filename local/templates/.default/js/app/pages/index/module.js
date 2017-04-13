'use strict';

const PAGE_NAME = moduleConfig.name;
// const Routing = require('./route');
import Routing from './route';
import Controller from './controller';
import moduleConfig from './config';


export default angular
  .module(CONFIG.APP.PREFIX + PAGE_NAME + CONFIG.APP.PAGE_POSTFIX, ['ui.router'])
  .config(Routing)
  .controller(CONFIG.APP.PREFIX + PAGE_NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX, Controller);