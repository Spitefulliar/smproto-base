var MODULE_CONFIG = ['$mdThemingProvider', function($mdThemingProvider) {

    var customRedMap = $mdThemingProvider.extendPalette('red', {
      '50': 'ffffff',
      '700': 'f45c43',
      '800': 'eb3349',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['A100', 'A200'],
      'contrastLightColors': ['50']
    });

    $mdThemingProvider.definePalette('customRed', customRedMap);

    var customPurpleMap = $mdThemingProvider.extendPalette('deep-purple', {
      '50': 'ffffff',
      'A100': '9f62c9',
      'A200': '663399',
      'A700': '824ab0',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      'contrastLightColors': ['A100', 'A200'],
    });

    $mdThemingProvider.definePalette('customPurple', customPurpleMap);

    $mdThemingProvider
      .theme('default')
        .primaryPalette('customRed')
        .accentPalette('customPurple');
  }];

export default MODULE_CONFIG;