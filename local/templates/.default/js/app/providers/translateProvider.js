var MODULE_CONFIG = ['$translateProvider',  function($translateProvider) {
        $translateProvider.useCookieStorage();

        // let locale = CONFIG.APP.ENV.LOCALE;
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        };

        function getLocale() {
            let locale = getCookie('NG_TRANSLATE_LANG_KEY');
            if (!locale) locale = (window.location.href.indexOf('/en/') == -1 )? 'ru':'en';
            return locale;
        };

        let locale = CONFIG.APP.LOCALE = getLocale();
        let locale_lang = locale.slice(0,2);

        // require('angular-i18n/angular-locale_'+ locale +'.js');

        $translateProvider.preferredLanguage(locale_lang);
        $translateProvider.useSanitizeValueStrategy(null);

        $translateProvider.useStaticFilesLoader({
            prefix: CONFIG.APP.DICTIONARIESPATH,
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
