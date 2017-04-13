var MODULE_CONFIG = ['$mdThemingProvider', function($mdThemingProvider) {

    // var customPurpleMap = $mdThemingProvider.extendPalette('deep-purple', {
    //   '50': 'ffffff',
    //   'A100': '9f62c9',
    //   'A200': '663399',
    //   'A700': '824ab0',
    //   'contrastDefaultColor': 'light',
    //   'contrastDarkColors': ['50'],
    //   'contrastLightColors': ['A100', 'A200'],
    // });

    // $mdThemingProvider.definePalette('customPurple', customPurpleMap);

    $mdThemingProvider
      .theme('default')
        .dark()
        .primaryPalette('blue')
        .accentPalette('light-blue')
        .backgroundPalette('blue-grey');
  }];

export default MODULE_CONFIG;
