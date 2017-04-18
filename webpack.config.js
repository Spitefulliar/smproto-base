const NODE_ENV = process.env.NODE_ENV;

var webpack = require('webpack');
var path = require('path');

var ExtractPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var CopyPlugin = require('copy-webpack-plugin');

var projectRootPath = path.join(__dirname, '/local/templates/.default');      //path to root
var entryPath = path.join(projectRootPath, '/js');         //path to input dir
var assetsPath = path.join(projectRootPath, '/assets');    //path to output dir

if (NODE_ENV == 'production') {
  var sourcemaps = false;
  var minimize = true;
  var postcssPackage = 'defaults';
  var buildModeNotice = "production mode on";

} else {
  var minimize = false;
  var sourcemaps = true;
  var postcssPackage = 'defaults';
  var buildModeNotice = "develop mode on";
}

var config = {
    context: entryPath,
    entry: {
      bundle: [
        './index.js', // файл для сборки cкриптов, если несколько - указываем hash (entry name => filename)
        './styles.js', // файл для сборки стилей
      ],
      vendor: './vendor.js', // файл для сборки либ
    },
    output: {
      path: assetsPath,
      filename: "[name].js",
      // chunkFilename: "[name].[id].js",
      publicPath: './'
    },
    module: {
        rules: [
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'html-loader'
                }
              ]
            },
            {
              test: /\.less$/,
              use: ExtractPlugin.extract({
                fallback: "style-loader",
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: false,
                      importLoaders: 2,
                      import: false,
                      url: false,
                      // localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
                      sourceMap: sourcemaps,
                      minimize: minimize
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      package: postcssPackage
                    }
                  },
                  { loader: 'less-loader' }
                ]
              })
            },
            {
              test: /\.scss$/,
              exclude: /(\/css\/components\/)/,
              use: ExtractPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                      loader: 'css-loader',
                      options: {
                        modules: false,
                        importLoaders: 2,
                        import: false,
                        url: false,
                        // localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
                        sourceMap: sourcemaps,
                        minimize: minimize
                      }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        package: postcssPackage
                      }
                    },
                    { loader: 'sass-loader' }
                  ]
              })
            },
            {
              test:  /(\/css\/components\/)/,
              // test: /\.scss$/,
              use: ExtractPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                        importLoaders: 2,
                        import: false,
                        url: false,
                        localIdentName: "[local]",
                        sourceMap: sourcemaps,
                        minimize: minimize
                      }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        package: postcssPackage
                      }
                    },
                    { loader: 'sass-loader' }
                  ]
              })
            },
            {
              test: /\.css$/,
              use: ExtractPlugin.extract({
                fallback: "style-loader",
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: false,
                      importLoaders: 1,
                      import: false,
                      url: false,
                      // localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
                      sourceMap: sourcemaps,
                      minimize: minimize
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      package: postcssPackage
                    }
                  }
                ]
              })
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    "prefix": 'img',
                    "limit": 3000,
                    "q": 3000,
                    "name": "[name].[ext]"
                  }
                }
              ],
            },
            {
              test: /\.svg$/,
              exclude: /(\.font\.|\/sprite\/)/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    "prefix": 'font',
                    "mimetype": 'image/svg+xml',
                    "limit": 3000,
                    "q": 3000,
                    "name": "[name].[ext]"
                  }
                }
              ],
            },
            {
              test: /\/sprite\//,
              use: [
                {
                  loader: "svg-sprite-loader",
                  options: {
                    "name": 'spr-[name]',
                    "prefixize": true,
                    "exclude": /(\.font\.)/,
                  }
                }
              ],
            },
            {
              test: /\.woff$/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    "prefix": 'font',
                    "mimetype": 'application/font-woff',
                    "limit": 3000,
                    "q": 3000,
                    "name": "[name].[ext]"
                  }
                }
              ],
            },
            {
              test: /\.woff2$/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    "prefix": 'font',
                    "mimetype": 'application/font-woff2',
                    "limit": 3000,
                    "q": 3000,
                    "name": "[name].[ext]"
                  }
                }
              ],
            },{
              test: /\.eot$/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    "prefix": 'font',
                    "mimetype": 'application/font-eot',
                    "limit": 3000,
                    "q": 3000,
                    "name": "[name].[ext]"
                  }
                }
              ],
            },
            {
              test: /\.(ttf|otf)$/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    "prefix": 'font',
                    "mimetype": 'application/octet-stream',
                    "limit": 3000,
                    "q": 3000,
                    "name": "[name].[ext]"
                  }
                }
              ],
            },
            {
              test: /\.js$/ ,
              exclude: /(node_modules|bower_components|libs|\.config\.|\.font\.|\.min\.js)/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    // 'presets': [['es2015', { "modules": false }]]
                    "presets": [
                      ["env", {
                        "targets": {
                          "browsers": ["last 2 versions", "ie >= 10"]
                        },
                        "useBuiltIns": true,
                        "debug": false
                      }]
                    ]
                  }
                }
              ],
            },
            {
              test: /bootstrap\.config\.js$/,
              exclude: /(node_modules)/,
              use: ['bootstrap-webpack']
            },
            {
              test: require.resolve("jquery"),
              use: [
                {
                  loader: "expose-loader?$!expose-loader?jQuery"
                }
              ]
            },
            // {
            //   test: require.resolve("snapsvg"),
            //   use: [
            //     {
            //       loader: 'imports-loader?this=>window,fix=>module.exports=0'
            //     }
            //   ]
            // },
        ]
    },
    resolve: {
      modules: [
        // path.join(__dirname, "src"),
        "node_modules"
      ],
      alias: {
        // "TweenLite": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TweenLite.js'),
        // "TweenMax": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TweenMax.js'),
        // "TimelineLite": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TimelineLite.js'),
        // "TimelineMax": path.join(__dirname,'/node_modules/gsap/src/uncompressed/TimelineMax.js'),
        // "ScrollMagic": path.join(__dirname,'/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        // "animation.gsap": path.join(__dirname,'/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        // "animation.velocity": path.join(__dirname,'/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js'),
        // "velocity": path.join(__dirname,'/node_modules/velocity-animate/velocity.min.js'),
      }
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'NODE_ENV': JSON.stringify('develop') //setting environment variable
        //     // 'NODE_ENV': JSON.stringify('production'), //setting environment variable
        // }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        new webpack.ProvidePlugin({
          //configs
          'NODE_ENV': 'NODE_ENV',
          'CONFIG': path.join(entryPath, "/config.js"),
          //libs
          '$': 'jquery',
          'jQuery': 'jquery',
          'window.jQuery': 'jquery',
          'Slick': 'slick-carousel',
          // 'TweenMax': 'TweenMax',
          // 'TimeLineMax': 'TimeLineMax',
          // 'ScrollMagic': 'scrollmagic',
          // 'Hamster': 'hamsterjs',
          // 'Snap': 'snapsvg',
          // 'Matter': 'matter-js',
        }),
        new ExtractPlugin({
          filename: '[name].css',
          disable: false,
          allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
          options: {
            postcss: function () {
              return {
                oldsup: [require('postcss-flexbugs-fixes'), autoprefixer({ browsers: ['last 5 version','safari >= 8, ie >= 8'] })],
                defaults:  [require('postcss-flexbugs-fixes'), autoprefixer({ browsers: ['last 3 version'] })]
              };
            },
          htmlLoader: {
              ignoreCustomFragments: [/\{\{.*?}}/],
              root: path.resolve(__dirname),
              attrs: ['link:href']
              // attrs: ['img:src', 'link:href']
            },
          }
        }),
        new CopyPlugin([
            { from: '../../../../node_modules/angular-i18n/angular-locale_ru.js', to: '../libs/angular-i18n/' },
            { from: '../../../../node_modules/angular-i18n/angular-locale_en.js', to: '../libs/angular-i18n/' },
        ]),
    ],
    watch: false
};

if (NODE_ENV == 'production') {
  //uglifying enabled
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        mangle: false,
        sourceMap: false
      }
    )
  );
  //minimization enabled
  config.plugins.push(new webpack.LoaderOptionsPlugin({
       minimize: true
     })
  );

} else {
  config.devtool = "source-map";
}

console.info("\x1b[37m", "\x1b[40m");
console.info("\x1b[35m", "\x1b[40m", buildModeNotice);
console.info("\x1b[37m", "\x1b[40m");

module.exports = config;
