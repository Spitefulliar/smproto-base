//DIRECTIVE
import MODULE_CONFIG from './config';

export default ['$rootScope','$http', '$timeout', '$window', '$state',
  function ($rootScope, $http, $timeout, $window, $state) {
    var linkFunction = function linkFunction($scope, $element, $attributes) {
        $scope.mailingPopupData = {
          "title": "За подписку на новости &quot;БРЕНДА&quot; <br>дарим скидку 5% на все товары",
          "description": "Звездочкой отмечены обязательные <br>для заполнения поля",
          "fields": {
              "name": {
                "label": "Name",
                "error": {
                  "required": "fieldError.required"
                }
              },
              "email": {
                "label": "Email address",
                "error": {
                  "required": "fieldError.required"
                }
              },
              "phone": {
                "label": "Phone",
                "error": {
                  "minlength": "fieldError.phone.minlength",
                  "maxlength": "fieldError.phone.maxlength"
                }
              },
              "sex": {
                "label": "Sex",
                "options": [
                  {
                    "label": "Male",
                    "value":"male"
                  },
                  {
                    "label": "Female",
                    "value":"female"
                  }
                ]
              },
              "dateOfBirth": {
                "label": "Date of birth",
                "fields": {
                  "day": {
                    "label": "Day"
                  },
                  "month": {
                    "label": "Month"
                  },
                  "year": {
                    "label": "Year"
                  },
                }
              },
              "policy": {
                "label": "Согласен с <a href='#'>политикой конфиденциальности<sup>*</sup></a>"
              }
            },
          "btnText": "Subscribe"
        }

        $scope.submit = function() {
          $scope.close();
        }
    };
  return {
    restrict: "AE",
    link: linkFunction,
    controller: MODULE_CONFIG.CONTROLLER_NAME
    // template: require('./template.html')
  };
}];
