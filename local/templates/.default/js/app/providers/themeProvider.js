var MODULE_CONFIG = ['$mdThemingProvider', function($mdThemingProvider) {

    var customLightBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      '50': 'ffffff',
      // 'A100': '9f62c9',
      // 'A200': '663399',
      'A700': '#000000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      'contrastLightColors': ['A700'],
    });

    $mdThemingProvider.definePalette('customLightBlue', customLightBlueMap);

    $mdThemingProvider
      .theme('default')
        // .light()
        .primaryPalette('customLightBlue')
        .accentPalette('blue')
        .backgroundPalette('blue-grey');
    $mdThemingProvider
        .enableBrowserColor({
          theme: 'default', // Default is 'default'
          palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
          hue: '800' // Default is '800'
        });
  }];

export default MODULE_CONFIG;
