'use strict';

const template = require('./template.html');

import MODULE_CONFIG from './config';

var routing = ['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state(MODULE_CONFIG.PAGE_STATE, {
      url: MODULE_CONFIG.PAGE_URL,
      template: template,
      controller: MODULE_CONFIG.CONTROLLER_NAME,
      data: MODULE_CONFIG
    });
}];

export default routing;
