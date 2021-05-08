
// 路径模块
let path = require('path');

// 取出主题名称（路径名）
let themeName = getPagesName();

module.exports = {
  // 输出目录
  outputDir: 'dist/' + themeName,

  // 公共路径
  publicPath: './',

  // 静态资源路径
  assetsDir: 'static',

  // 代码风格校验
  lintOnSave: false,

  // 服务配置
  devServer: {
    open: true
  },

  // 配置路径别名
	configureWebpack: {
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
		}
	},

  // 页面配置
  pages: {
    // 默认项目页面
    index: {
      entry: 'src/' + themeName + '/main.js',
      template: 'public/index.html',
      title: require(path.resolve(__dirname, 'src/' + themeName + '/utils/set-title.js')).title,
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
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