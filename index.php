<!DOCTYPE html>
<html lang="ru" ng-app="app" art-main-dir>
<head>
  <title ng-bind="pageData.title"></title>

  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <base href="/">

  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="./local/templates/.default/assets/vendor.css?<?php echo time()?>">
  <link rel="stylesheet" type="text/css" href="./local/templates/.default/assets/bundle.css?<?php echo time()?>">
  <!-- eof CSS -->

  <!-- js -->
  <script defer rel="preload" src="./local/templates/.default/assets/vendor.js?<?php echo time()?>" type="text/javascript" charset="utf-8"></script>
  <script defer rel="preload" src="./local/templates/.default/assets/bundle.js?<?php echo time()?>" type="text/javascript" charset="utf-8"></script>
  <!-- different locale for en -->
  <script defer rel="preload" src="./local/templates/.default/libs/angular-i18n/angular-locale_<? if (empty($_COOKIE["NG_TRANSLATE_LANG_KEY"])) { echo 'ru'; } else { echo $_COOKIE["NG_TRANSLATE_LANG_KEY"];} ?>.js"></script>
  <!-- eof js -->
</head>

<body>
  <art-header-dir></art-header-dir>
  <main class="main">
    <ui-view autoscroll="true">
    </ui-view>
  </main>
</body>
</html>
