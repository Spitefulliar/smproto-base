# Webpack 2 bundled Angular 1.5.x based app #

## Links ##
+   [Readme in Russian](/api/readme/readmeRus.md)
## Package manager ##
Yarn (or npm, but less preferable)
For node modules installation run
    `yarn`

## Building ##
For building run
    `webpack`
Webpack.config is tuned for develop mode - source maps included, no compression

##  Scripts:

+   `npm run pull`: pull from master, install yarn packages, build in production mode
+   `npm run build`: build in develop mode
+   `npm run buildprod`: build in production mode
+   `npm run watch`: buid with watcher on

## Entries ##
Root directory for entries context is `local/templates/.default/`

### Vendor ###
Contains all vendor libs, accept those, needed for angular app

### Bundle ###
Contains:
- styles, located in `[root directory]/css/`;
- scripts, included in index.js (aka app, sprite generator). Located at    `[root directory]/js/`;

## App ##
By default app is included into bundle and is located at `[root directory]/js/app`.
App uses config from `[root directory]/config`:
- It's prefix
- Modules postfix
- Directives postfix
- Controllers postfix
- Service postfix


App includes all components, located in `[root directory]/js/app/components` folder.
Default component from this folder shows basic usage.
App includes all pages, located in `[root directory]/js/app/pages` folder.
Default page from this folder shows basic usage.
App includes all services, located in `[root directory]/js/app/services` folder.
Every module is required by name of the folder in combination with app prefix and module postfix.

Every name (module, service, etc) looks looks like this:
    [app-prefix][name][corresponding postfix]
Every modules settings are located in config file in it's folder

Small default rouing provided in `[root directory]/js/app/providers/routeProvider.js`, but mostly routs are in pages folders.
Angular material is also included.

## Dictionaries ##
Dictionaries are located in `[root directory]/js/app/dictionaries`. Asynchronously loaded according to selected locale.

## Styles ##
Are located in `[root directory]/css/`.
Divided into components.
## SVG Sprite ##
SVG files are included in index.js
Source folder is `[root directory]/img/sprite`
For correct using you'll have to use combined shapes and remove all fills or strokes from source files. And replace them by css filling. If source colouring suits you well, you can leave it.
## JSON ##
Temporary json files with data are located in `/api/json





