//SERVICE
export default class Service {
  constructor($http, $rootScope, $state) {
    let vm = this;

    vm.links = [{
      "name": "Доставка и оплата",
      "sref": "delivery",
      "external": false,
      "blank": true
    }, {
      "name": "Адреса магазинов",
      "sref": "adresses",
      "external": false,
      "blank": true
    }, ];

    vm.citySelect = {
      "label": "Ваш город",
      "city": {
        "name": "Москва",
        "value": 1111
      }
    };

    vm.languageSelect = {
      "label": "Язык",
      "options": [{
        "name": "Русский",
        "value": "ru"
      },
      {
        "name": "Английский",
        "value": "en"
      }]
    };

  }
}

Service.$inject = ['$http', '$rootScope', '$state'];
