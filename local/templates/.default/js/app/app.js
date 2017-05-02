//config
import translateProvider from './providers/translateProvider.js';
import themeProvider from './providers/themeProvider.js';
import routeProvider from './providers/routeProvider.js';

//angular modules
import angular from 'angular';
// import ngAria from 'angular-aria';
// import touch from 'angular-touch';
import uirouter from 'angular-ui-router';
// import animate from 'angular-animate';
import svgBaseFix from 'angular-svg-base-fix';
import baronScrollbar from 'angular-baron-scrollbar';
import angularSlick from 'angular-slick-carousel';
import ngMaterial from 'angular-material';
import cookies from 'angular-cookies';
// import storage from 'ngstorage';
import truncate from 'angular-truncate-2';
// import youtubeMb from 'angular-youtube-embed';
import messages from 'angular-messages';
import mdSteppers from 'md-steppers';
// import ngPinchZoom from './../../libs/angular-pinch-zoom/ng-pinch-zoom.min.js';
// import ngLazyImg from 'angular-lazy-image';
// import ngViedoBg from './../../../../../node_modules/angular-video-background/src/video-background.module.js';
import translate from 'angular-translate';
import translateStorageLocal from'angular-translate-storage-local';
import translateStorageCookie from'angular-translate-storage-cookie';
import translateHandlerLog from 'angular-translate-handler-log';
import translateLoaderStaticFiles from 'angular-translate-loader-static-files';


// require('angular-i18n/angular-locale_'+ 'ru-ru' +'.js');

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

//custom modules
let appComponents = require.context('./components/', true, /^\.\/.*(module)\.js$/);
// appComponents.keys().forEach(appComponents);
requireAll(appComponents);

//pages
let pages = require.context('./pages/', true, /^\.\/.*(module)\.js$/);
// pages.keys().forEach(pages);
requireAll(pages);

//services
let services = require.context('./services/', true, /^\.\/.*(module)\.js$/);
// services.keys().forEach(services);
requireAll(services);

let appDependenciesArr = [];
appComponents.keys().forEach(function(item, i, arr) {
  let tmpName = item.substr(2).slice(0,-10);
  let name = CONFIG.APP.PREFIX + tmpName[0].toUpperCase() + tmpName.slice(1);
  appDependenciesArr.push(name);
});

pages.keys().forEach(function(item, i, arr) {
  let tmpName = item.substr(2).slice(0,-10);
  let name = CONFIG.APP.PREFIX + CONFIG.APP.PAGE_PREFIX + tmpName[0].toUpperCase() + tmpName.slice(1);
  appDependenciesArr.push(name);
});

services.keys().forEach(function(item, i, arr) {
  let tmpName = item.substr(2).slice(0,-10);
  let name = CONFIG.APP.PREFIX + CONFIG.APP.SERVICE_PREFIX + tmpName[0].toUpperCase() + tmpName.slice(1);
  appDependenciesArr.push(name);
});

//all dependent modules
appDependenciesArr = appDependenciesArr.concat([
    'ngMaterial',
    // 'ngAria',
    // 'ngTouch', //not included with material
    'ui.router',
    // 'ngAnimate',
    'svgBaseFix',
    'angular-baron-scrollbar',
    'slickCarousel',
    'ngCookies',
    // ui,
    // uiTpls,
    // uiMask,
    'ngLocale',
    // uiSelect,
    baronScrollbar,
    'truncate',
    // 'youtube-embed'
    // 'ngStorage',
    messages,
    'md-steppers',
    // 'ngPinchZoom',
    // 'afkl.lazyImage',
    // 'video-background',
    // 'angular-translate',
    // 'pascalprecht.translate',
    translate,
    translateStorageLocal,
    translateStorageCookie,
    translateHandlerLog,
    translateLoaderStaticFiles
]);



//app
var app = angular.module(CONFIG.APP.NAME, appDependenciesArr)
  .config(routeProvider)
  .config(translateProvider)
  .config(themeProvider)
  .filter('numEnding', ['$locale', function($locale) {
      return function(item, number, endingsArray) {

        var number = number % 100;
        var ending = item;

        if (number>=11 && number<=19) {
            ending = endingsArray[2];
        }
        else {
            var i = number % 10;
            switch (i)
            {
                case (1): ending = endingsArray[0]; break;
                case (2):
                case (3):
                case (4): ending = endingsArray[1]; break;
                default: ending =endingsArray[2];
            }
        }
        return ending;

      };
    }])
  .filter('html', ['$sce', function($sce) {
      return function (input, type) {
        if (typeof input === "string") {
          return $sce.trustAs(type || 'html', input);
        }
        return "";
      };
    }
  ])
  .filter('isArr', [function() {
      return function (input) {
        return angular.isArray(input);
      };
    }
  ]);



export default CONFIG.APP.NAME;
