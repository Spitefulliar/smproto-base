import { Config } from './../../helpers/config';

const MODULE_CONFIG = new Config({
  NAME: 'catalog',
  TYPE: 'page',
  PAGE_URL: '/catalog{delim1:[\/]*}{category:[^/]*}{delim2:[\/]*}{subcategory:[^/]*}/',
  PAGE_LOADER: false,
});

export default MODULE_CONFIG;
