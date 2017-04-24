import { Config } from './../../helpers/config';

const MODULE_CONFIG = new Config({
  NAME: 'catalog',
  TYPE: 'page',
  PAGE_URL: '/catalog{delim1:[(\/| \_)]*}{category:[^/]*}{delim2:[(\/| \_)]*}{subcategory:[^/]*}/',
  PAGE_LOADER: false,
});

export default MODULE_CONFIG;
