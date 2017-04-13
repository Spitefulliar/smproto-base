var MODULE_CONFIG = ['$translateProvider', function($translateProvider) {
        $translateProvider.useCookieStorage();

        // let locale = CONFIG.APP.ENV.LOCALE;
        let locale = (window.location.href.indexOf('/en/') == -1 )? 'ru':'en';
        let locale_lang = locale.slice(0,2);

        // require('angular-i18n/angular-locale_'+ locale +'.js');

        $translateProvider.preferredLanguage(locale_lang);
        $translateProvider.useSanitizeValueStrategy(null);

        $translateProvider.useStaticFilesLoader({
            prefix: '/local/templates/.default/js/app/dictionaries/dictionary_',
            suffix: '.json'
        });

        $translateProvider.registerAvailableLanguageKeys(['ru', 'en'], {
            'ru': 'ru',
            'en': 'en',
        });

        $translateProvider.uniformLanguageTag('bcp47');
        $translateProvider.fallbackLanguage('ru');

    }];

export default MODULE_CONFIG;
