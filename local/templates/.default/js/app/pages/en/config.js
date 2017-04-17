import { Config } from './../../helpers/config';

const MODULE_CONFIG = new Config({
  NAME: 'en',
  // PAGE_TITLE: 'En page title',
  // PAGE_STATE: '/en/',
  // PAGE_URL: '/en/',
  PAGE_API_PARAM: 'default.json',
  // PAGE_LOADER_PARAM: 'encode'
}, 'page');

console.log(MODULE_CONFIG);

export default MODULE_CONFIG;
