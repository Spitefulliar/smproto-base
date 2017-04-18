var MODULE_CONFIG = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

    //mode declaration
    $locationProvider.html5Mode(false);//.hashPrefix('!');
    // $locationProvider.html5Mode(true);//.hashPrefix('!');

    // let config = require('../../helper_config.js');
    // let viewsDir = "/dist/views/pages/";
    // let viewsExt = ".html";

    // let pages = [
    //   {
    //     state: 'index',
    //     template: 'index',
    //     title: 'Index',
    //     url: '^/',
    //     options: false
    //   },
    //   {
    //     state: '404',
    //     template: '404',
    //     title: '404',
    //     url: '^/404/',
    //     options: false
    //   }
    // ];


    // pages.map(function(page){
    //   $stateProvider
    //     .state(page.state, {
    //         url: page.url,
    //         templateUrl: viewsDir + page.template + viewsExt,
    //         data : {
    //           title: page.title
    //         }
    //     });
    // });

    $urlRouterProvider.otherwise('404/');
}];

export default MODULE_CONFIG;
