//SERVICE
export default ['$http', '$rootScope',
  function($http, $rootScope,) {
    let service = {};

    service.getPage = function(apiurl, code) {
      let qData = {
        code: code
      };
      return $http({
        method: 'GET',
        url: apiurl + '?' + $.param(qData),
      }).then(function(response) {
          //if there are typycal page sections, transform  them
          if (response.data.page && response.data.page.sections) {
            response.data.page.sections = service.sectionsCommonTranform(response.data.page.sections);
          }

          return response.data;
        }, function(response) {
          console.warn("can't get page data");
          return;
      });
    };


    let makeVerticalGradient = function (top,col1,col2,single) {
      let gradientTpl = [];
      gradientTpl[0] = `-moz-linear-gradient(${(top)? 'top':'bottom'}, ${col1}, ${col2})`;
      gradientTpl[1] = `-webkit-linear-gradient(${(top)? 'top':'bottom'}, ${col1}, ${col2})`;
      gradientTpl[2] = `linear-gradient(${(top)? 'to bottom':'to top'}, ${col1}, ${col2})`;
      //single for real background declaration
      if(single) {
        return gradientTpl[2];
      } else {
        return gradientTpl;
      };
    }

    service.defaultStyleTranform = function(rawStyle){
      if (!rawStyle) return false;
      let styleObj = {
        'color': rawStyle.textColor,
        'background-color': rawStyle.bgColor,
        'background-image': (rawStyle.bgImage)? ('url(' + ($rootScope.isDesktop && rawStyle.bgImage.desktop || rawStyle.bgImage.mobile) + ')') : false,
        'background': (rawStyle.bgGradient)? makeVerticalGradient(rawStyle.bgGradient.top,rawStyle.bgGradient.col1, rawStyle.bgGradient.col2, true) : false,
      }
      if (rawStyle.bgGradient) rawStyle.bgGradientRule = makeVerticalGradient(rawStyle.bgGradient.top,rawStyle.bgGradient.col1, rawStyle.bgGradient.col2);
      return [rawStyle,styleObj];
    }

    service.sectionsCommonTranform = function(sections){
      let tmpSections = sections;
      let tmpStyle;
      for (var i = tmpSections.length - 1; i >= 0; i--) {
        let section = tmpSections[i];
        tmpStyle = service.defaultStyleTranform(section.style);
        section.style = tmpStyle[0];
        section.commonStyle = tmpStyle[1];
        for (var j = section.blocks.length - 1; j >= 0; j--) {
          let block = section.blocks[j];
          tmpStyle = service.defaultStyleTranform(block.style);
          block.style = tmpStyle[0];
          block.commonStyle = tmpStyle[1];
        }
      }
      return tmpSections;
    };

    return service;
}];
