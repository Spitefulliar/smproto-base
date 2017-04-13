const MODULE_CONFIG = { NAME: 'moduleConfig' };

class Service = function () {

}

export default angular
  .service(CONFIG.APP.PREFIX + MODULE_CONFIG.NAME + CONFIG.APP.SERVICE_POSTFIX, new Service);
