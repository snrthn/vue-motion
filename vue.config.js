
// 路径模块
let path = require('path');

// 取出主题名称（路径名）
let themeName = getPagesName();

// HTML配置
let htmlConfig = require(path.resolve(__dirname, 'src/' + themeName + '/utils/set-title.js'));

// 是否生产打包
let isProd = process.env.NODE_ENV === 'production';

// 打包分析
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [];

if (isProd) plugins.push(new BundleAnalyzerPlugin());

module.exports = {
  // 输出目录
  outputDir: 'dist/' + themeName,

  // 公共路径
  publicPath: './',

  // 静态资源路径
  assetsDir: 'static',

  // 代码风格校验
  lintOnSave: false,

  // 生产环境不使用 source-map
  productionSourceMap: false,

  // 服务配置
  devServer: {
    open: true
  },

  // 配置路径别名
	configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      //生产包取消console debugger打印    
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
    }
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/' + themeName),
          'components': '@/componsnts',
          'assets': '@/assets',
          'styles': '@/styles',
          'common': '@/common',
          'router': '@/router',
          'store': '@/store',
          'store': '@/store',
          'views': '@/views',
          'utils': '@/utils',
          'api': '@/api'
        }
      },
      plugins
    }
	},

  // 配置 favicon
  chainWebpack: (config) => {
    config.module
      .rule('favicon')
      .test(/\.ico$/)
      .use('file-loader')
        .loader('file-loader')
        .tap(options => {
          options = {
            name: 'favicon.ico'
          }
          return options;
        })
        .end()
  },

  // 页面配置
  pages: {
    // 默认项目页面
    index: {
      theme: themeName,
      entry: 'src/' + themeName + '/main.js',
      template: 'public/index.html',
      title: htmlConfig.title,
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      jsLink: htmlConfig.scripts
    }
  }
}

// 获取参数
function getPagesName () {
  let argConf = JSON.parse(process.env.npm_config_argv).original;
  let tarPage = null;
  for (let i = 0; i < argConf.length; i++) {
    if (argConf[i].indexOf('--') !== -1) {
      tarPage = argConf[i].substr(2);
      break;
    }
  }
  if (!tarPage) tarPage = 'index';
  return tarPage;
}